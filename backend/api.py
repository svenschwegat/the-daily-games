import os
from fastapi import FastAPI, HTTPException, Body, Request
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager
from dotenv import load_dotenv

from services.supabase_service import SupabaseService
from services.data_service import DataService

load_dotenv(dotenv_path="./.env")

@asynccontextmanager
async def lifespan(app: FastAPI):
    global db_service
    db_service = SupabaseService.from_env_vars()
    global data_service
    data_service = DataService(db_service)
    
    yield
    print('Shutting down')

app = FastAPI(lifespan=lifespan)

frontend_url = os.environ.get("FRONTEND_URL")
if not frontend_url:
    raise ValueError("FRONTEND_URL is not set in the environment variables")

origins = [
    frontend_url
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/games")
async def get_games():
    try:
        result = data_service.get_games()
        if result is None:
            raise HTTPException(status_code=500, detail="Error fetching games")
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/filters/{filter_type}")
async def get_filters(filter_type: str):
    try:
        result = data_service.get_filter(filter_type)
        if result is None:
            raise HTTPException(status_code=500, detail=f"Error fetching filters for {filter_type}")
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.post("/game")
async def insert_game(request: Request):
    body = await request.json()
    table = body.get("table")
    data = body.get("data")
    
    db_service.authenticate_request(request)

    try:
        game_data = data_service.prepare_game_data(data)
        result = data_service.insert_into_table(table, game_data)
        # todo upload file to bucket with correct id
        if result is None:
            raise HTTPException(status_code=500, detail=f"Error inserting data into {table}")
        return result
    except Exception as e:
        if(e.code == "42501"):
            raise HTTPException(status_code=403, detail="Insert permission denied. Check your RLS policies.")
        else: 
            raise HTTPException(status_code=500, detail=str(e))
import uvicorn
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager
from dotenv import load_dotenv

from services.sqlite_service import SqliteService
from services.data_service import DataService

load_dotenv(dotenv_path="./.env")

@asynccontextmanager
async def lifespan(app: FastAPI):
    global sqlite_service
    sqlite_service = SqliteService.from_env_vars()
    global data_service
    data_service = DataService(sqlite_service)
    
    yield
    sqlite_service.close_connection()
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
    
if(__name__ == "__init__"):
    uvicorn.run(app, host="0.0.0.0", port=8000)
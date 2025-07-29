## About 
This small project contains a list of daily games (sometimes known as "Dles" from the popular game 'Wor**dle**') with a filtering function of those games based on the quiz style, answer type and more.

Core technologies are [Next.js](https://nextjs.org/) as a React Framework, Fastapi, Python and Sqlite.

![image](https://github.com/user-attachments/assets/05c6219b-86c3-4c79-b61e-aadbdd21d214)

## Getting started
Ensure that the .env.template files from the env_vars folder are placed in their separate frontend or backend folder and renamed to just .env.
The structure should look like this:

project_folder/

 ├─ backend/
 
 │  ├─ .env
 
 ├─ database/
 
 │  ├─ daily_games.db
 
 ├─ frontend/
 
 │  ├─ .env

## Running the app
Run the ```docker-compose -up build``` command in the root directory to get the app running.

The database has several tables to be present, including games, categories, publishers etc.

You can also run the project without Docker:
```
cd frontend
npm install
npm run dev
```
and 
```
cd backend
pip install -r requirements.txt
uvicorn api:app --reload
```

## Author
- [@svenschwegat](https://www.github.com/svenschwegat)

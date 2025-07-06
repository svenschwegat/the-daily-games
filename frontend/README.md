## About 
This small project is a list of daily games (sometimes known as "Dles" from the popular game 'Wor d l e') with a filtering function of those games.

Core technologies are Next.js as a React Framework, Fastapi, Python and Sqlite.

## Getting started
Ensure that the .env.template files from the env_vars folder are placed in their separate frontend or backend folder and renamed to just .env.
Structure should look like this:
project_folder/
├─ backend/
│  ├─ .env
├─ database/
│  ├─ daily_games.db
├─ frontend/
│  ├─ .env

Run the docker-compose -up build command in the root to get the app running
The database has several tables to be present, including games, categories, publishers etc.
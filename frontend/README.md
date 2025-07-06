## About 
This small project is a list of daily games (sometimes known as "Dles" from the popular game 'Wor d l e') with a filtering function of those games.

Core technologies are Next.js as a React Framework, Fastapi, Python and Sqlite.

## Getting started
Ensure that the .env.template files from the env_vars folder are placed in their separate frontend or backend folder and renamed to just .env.
Structure should look like this:
project_folder/
├─ backend/
│  ├─ .env
├─ frontend/
│  ├─ .env

The first time make sure to do pip install requirements.txt in the backend folder and npm install in the frontend folder

In the frontend folder run: npm run dev
In the backend folder run: fastapi run api.py
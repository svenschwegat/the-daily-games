## About 
This small project contains a list of daily games (sometimes known as "Dles" from the popular game 'Wor**dle**') with a filtering function of those games based on the quiz style, answer type and more.

Core technologies are [Next.js](https://nextjs.org/) as a React Framework, Fastapi, Python and Supabase (initially also with Sqlite).

![image](https://github.com/user-attachments/assets/773d000c-07db-42c1-a67d-cad9708fa14d)

## Getting started
Ensure that the .env.template files from the env_vars folder are placed in their separate frontend or backend folder and renamed to just .env.
The structure should look like this:

project_folder/

 ├─ backend/
 
 │  ├─ .env
 
 ├─ frontend/
 
 │  ├─ .env


## Running the app
Run the ```docker-compose -up build``` command in the root directory to get the app running.

The database needs several tables to be present, including games, categories, publishers etc.

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

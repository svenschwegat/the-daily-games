import os
import sqlite3

class SqliteService:
    def __init__(self, uri):
        uri = uri
        self.conn = sqlite3.connect(uri)
        print('SqliteService initialized', uri)

    @classmethod
    def from_env_vars(cls):
        uri = os.environ.get("SQLITE_DB_URI")
        if not uri:
            raise ValueError("SQLITE_DB_URI is not set in the environment variables")
        return cls(uri)

    def close_connection(self):
        self.conn.close()

    def select_from_db(self, select_statement):
        self.conn.row_factory = sqlite3.Row
        cursor = self.conn.cursor()
        cursor.execute(select_statement)
        rows = cursor.fetchall()

        result = [dict(row) for row in rows]
        return result
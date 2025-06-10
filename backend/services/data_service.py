import sqlite3

class DataService:
    def __init__(self, db):
        self.db = db

    def get_games(self):
        query = "SELECT * FROM games"
        return self.get_data(query)
    
    def get_data(self, query):
        try:
            self.db.conn.row_factory = sqlite3.Row
            cursor = self.db.conn.cursor()
            cursor.execute(query)
            rows = cursor.fetchall()

            result = [dict(row) for row in rows]
            return result
        except Exception as e:
            print(f"Error fetching data: {e}")
            return None
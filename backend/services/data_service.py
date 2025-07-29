import sqlite3

class DataService:
    def __init__(self, db):
        self.db = db

    def get_games(self):
        query = "SELECT * FROM games"
        return self.get_data(query)
    
    def get_filter(self, filter_table):
        if(filter_table == 'categories'):
            game_column = 'category_id'
        else:
            game_column = f"{filter_table[:-1]}_id"

        query = f"\
        SELECT fil.*, \
        CASE WHEN fil.id <> 0 \
            THEN COUNT(g.{game_column}) \
            ELSE NULL \
        END AS 'count' \
        FROM {filter_table} fil \
        LEFT JOIN games g \
        ON fil.id = g.{game_column} \
        GROUP BY g.{game_column}"
        
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
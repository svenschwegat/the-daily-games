class DataService:
    def __init__(self, db):
        self.db = db

    def get_games(self):
        response = self.select_from_table("games", "*")
        return response
    
    def get_filter(self, filter_table):
        data = self.select_from_table(filter_table, "*, games(count)")
        
        for row in data:
            if row["id"] == 0:
                row["count"] = None
            else:
                row["count"] = row["games"][0]["count"] if row["games"] else 0
            del row["games"]
        return data
        
    def select_from_table(self, table_name: str, select_statement: str):
        response = (
            self.db.client
            .table(table_name)
            .select(select_statement)
            .execute()
        )
        
        return response.data
    
    def insert_into_table(self, table_name: str, data: dict):
        response = (
            self.db.client
            .table(table_name)
            .insert(data)
            .execute()
        )
        
        return response.data

    def prepare_game_data(self, data: dict):
        print(data)
        # Todo upload file to bucket with correct id
        data.pop("file")
        return data
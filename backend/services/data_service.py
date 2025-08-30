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

        response.data
        if response is None:
            raise Exception(f"Error fetching data from {table_name}: {response.error.message}")
        
        return response.data
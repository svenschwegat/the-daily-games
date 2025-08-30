import os
from supabase import create_client, Client
from supabase.client import ClientOptions

class SupabaseService:
    def __init__(self, url: str, key: str):
        self.client: Client = create_client(
            url,
            key,
            options=ClientOptions(
                postgrest_client_timeout=10,
                storage_client_timeout=10,
                schema="public",
            )
        )
        print('SupabaseService initialized', url)

    @classmethod
    def from_env_vars(cls):
        url = os.environ.get("SUPABASE_URL")
        key = os.environ.get("SUPABASE_KEY")
        if not url or not key:
            raise ValueError("SUPABASE_URL or SUPABASE_KEY is not set in the environment variables")
        return cls(url, key)
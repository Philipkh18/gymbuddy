from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load from .env file
load_dotenv()

# Read connection string
mongo_uri = os.getenv("MONGO_URI")

try:
    client = MongoClient(mongo_uri)
    # Try listing database names to check the connection
    print("✅ Databases on this cluster:")
    print(client.list_database_names())
except Exception as e:
    print("❌ Connection failed:", str(e))
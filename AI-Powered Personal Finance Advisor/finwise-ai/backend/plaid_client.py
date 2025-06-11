from plaid import Client
import os
from dotenv import load_dotenv

load_dotenv()

plaid_client = Client(
    client_id=os.getenv("PLAID_CLIENT_ID"),
    secret=os.getenv("PLAID_SECRET"),
    environment="sandbox",
)

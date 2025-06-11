from fastapi import FastAPI
from advisor import generate_advice
from forecast import forecast_expenses
import json

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to FinWiseAI"}

@app.get("/summary")
def get_summary():
    with open("sample_data.json") as f:
        data = json.load(f)

    category_totals = {}
    for tx in data:
        cat = tx["category"]
        category_totals[cat] = category_totals.get(cat, 0) + tx["amount"]

    return category_totals

@app.get("/forecast")
def get_forecast():
    with open("sample_data.json") as f:
        data = json.load(f)
    return forecast_expenses(data)

@app.get("/advice")
def get_advice():
    with open("sample_data.json") as f:
        data = json.load(f)
    return {"advice": generate_advice(data)}

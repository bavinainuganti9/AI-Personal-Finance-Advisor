import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_advice(transactions):
    categories = {}
    for tx in transactions:
        cat = tx['category']
        categories[cat] = categories.get(cat, 0) + tx['amount']

    message = f"My spending breakdown is: {categories}. What are 3 personalized finance tips for me?"
    completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{ "role": "user", "content": message }],
        temperature=0.6,
    )
    return completion.choices[0].message.content

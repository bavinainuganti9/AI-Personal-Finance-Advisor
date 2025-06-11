# AI Personal Finance Advisor

## Overview / Description  
FinWiseAI is an AI-driven personal finance assistant that connects securely to your bank accounts via the Plaid API. It categorizes your spending, predicts future expenses using time series forecasting, and provides personalized budgeting and financial advice powered by GPT-4. 

## Features  
- Connects securely to bank accounts using Plaid API  
- Categorizes transactions into spending groups (Groceries, Dining, Rent, etc.)  
- Forecasts future expenses using ML models like Prophet or ARIMA  
- Generates personalized financial advice with GPT-4
- Interactive dashboard with charts for spending breakdowns and forecasts  
- Simple API endpoints for summary, forecast, and advice  

## Architecture  
- Backend: FastAPI server integrates with Plaid, runs forecasting models, and queries OpenAI GPT-4 for advice  
- Frontend: React app with TailwindCSS and Recharts for responsive UI and data visualization  

## Tech Stack  
- Frontend: React, TailwindCSS, Recharts, Axios  
- Backend: Python, FastAPI, Prophet (time series forecasting), OpenAI GPT-4 API, Plaid API  

import pandas as pd
from prophet import Prophet

def forecast_expenses(data):
    df = pd.DataFrame(data)
    df = df.groupby('date').sum().reset_index()
    df.columns = ['ds', 'y']

    model = Prophet()
    model.fit(df)

    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)

    return forecast[['ds', 'yhat']].tail(10).to_dict(orient='records')

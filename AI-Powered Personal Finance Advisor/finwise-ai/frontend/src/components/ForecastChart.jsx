import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ForecastChart({ data }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Expense Forecast</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="ds" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="yhat" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

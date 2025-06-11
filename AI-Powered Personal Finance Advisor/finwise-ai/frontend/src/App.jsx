import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryCard from './Components/SummaryCard';
import ForecastChart from './Components/ForecastChart';

export default function App() {
  const [summary, setSummary] = useState({});
  const [forecast, setForecast] = useState([]);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/summary').then(res => setSummary(res.data));
    axios.get('http://localhost:8000/forecast').then(res => setForecast(res.data));
    axios.get('http://localhost:8000/advice').then(res => setAdvice(res.data.advice));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">FinWiseAI – Personal Finance Advisor</h1>
      <SummaryCard data={summary} />
      <ForecastChart data={forecast} />
      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="text-lg font-bold mb-2">AI-Powered Financial Advice</h2>
        <p>{advice}</p>
      </div>
    </div>
  );
}

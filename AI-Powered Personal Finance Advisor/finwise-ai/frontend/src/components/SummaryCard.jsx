import React from 'react';

export default function SummaryCard({ data }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Spending Summary</h2>
      <ul className="list-disc list-inside">
        {Object.entries(data).map(([cat, amt]) => (
          <li key={cat}>{cat}: ${amt.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

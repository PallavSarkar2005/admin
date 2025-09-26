import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2025-09-21", totalTrips: 15 },
  { date: "2025-09-22", totalTrips: 22 },
  { date: "2025-09-23", totalTrips: 18 },
  { date: "2025-09-24", totalTrips: 25 },
  { date: "2025-09-25", totalTrips: 20 },
];

const DailyTripsChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Daily Total Trips</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis label={{ value: "Trips", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalTrips"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTripsChart;
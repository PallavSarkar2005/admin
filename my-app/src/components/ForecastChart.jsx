// src/components/ForecastChart.jsx

import React, { useState, useEffect } from "react";
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

// 1. IMPORT the local data and the local forecast function (from reportsData.js)
import { dailyTripsData, generateLocalForecast } from '../data/reportsData'; 

const ForecastChart = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    // NEW State to track the current view: 'daily' or 'forecast'
    const [viewMode, setViewMode] = useState('daily'); 

    // Function to generate the forecast locally
    const generateForecast = () => {
        setTimeout(() => {
            const forecastData = generateLocalForecast(dailyTripsData, 7);
            
            // Create the full merged dataset once
            const mergedData = [
                ...dailyTripsData.map(d => ({ ...d, isForecast: false, totalTrips: d.totalTrips })),
                ...forecastData.map(d => ({ 
                    date: d.date, 
                    totalTrips: d.totalTrips, 
                    isForecast: true 
                }))
            ];

            setChartData(mergedData);
            setLoading(false);
        }, 500); // 0.5 second delay
    };

    useEffect(() => {
        generateForecast();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- Data Preparation based on View Mode ---

    // Filter data based on viewMode
    const dataForCurrentView = chartData.filter(d => 
        viewMode === 'daily' ? !d.isForecast : true // 'daily' mode excludes forecast points
    );

    const chartTitle = viewMode === 'daily' ? "Daily Historical Trips" : "7-Day Local Forecast";
    const forecastStartIndex = dailyTripsData.length - 1;

    if (loading) {
        return (
            <div className="flex items-center justify-center h-80 bg-white shadow-lg rounded-xl">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-gray-600">Analyzing data and generating 7-day forecast...</span>
            </div>
        );
    }
    
    return (
        <div className="p-4 bg-white shadow-lg rounded-xl">
            {/* BUTTONS and Title Container */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{chartTitle}</h2>
                <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
                    {/* Button 1: Daily Trips (Historical) */}
                    <button
                        onClick={() => setViewMode('daily')}
                        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-150 ${
                            viewMode === 'daily' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
                        }`}
                    >
                        Daily Trips
                    </button>
                    {/* Button 2: Forecast (Combined Trend) */}
                    <button
                        onClick={() => setViewMode('forecast')}
                        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-150 ${
                            viewMode === 'forecast' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
                        }`}
                    >
                        Forecast
                    </button>
                </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dataForCurrentView} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis label={{ value: "Trips", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    
                    <Line
                        type="monotone"
                        dataKey="totalTrips" // Always use totalTrips for data binding
                        stroke={viewMode === 'daily' ? "#3b82f6" : "#10b981"} // Change color based on view
                        strokeWidth={2}
                        dot={viewMode === 'daily' ? { r: 3 } : false} // Only show dots in Daily view
                        activeDot={{ r: 8 }}
                        name={viewMode === 'daily' ? "Total Trips" : "Combined Trend"}
                        isAnimationActive={false} 
                        
                        // Apply dash array only in 'forecast' mode, and only to the prediction section
                        strokeDasharray={
                            viewMode === 'forecast' 
                                ? (index) => (index >= forecastStartIndex ? "5 5" : "0 0") 
                                : "0 0"
                        }
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ForecastChart;

// src/pages/Dashboard.jsx

import React from 'react';
import MetricsCards from '../components/MetricsCards';
import RecentActivity from '../components/RecentActivity';
import QuickStats from '../components/QuickStats';
// 1. Import the ForecastChart component (which uses the Gemini API)
import ForecastChart from '../components/ForecastChart'; 

const Dashboard = ({ searchTerm }) => {
  return (
    <div className="dashboard-content">
      {/* Metrics Cards remain at the top */}
      <MetricsCards />
      
      {/* 2. RENDER the AI-powered Forecast Chart here */}
      <div className="chart-container-full-width">
        {/* This component will show a loading state while fetching the forecast */}
        <ForecastChart />
      </div>

      <div className="dashboard-grid">
        <RecentActivity searchTerm={searchTerm} />
        <QuickStats />
      </div>
    </div>
  );
};

export default Dashboard;

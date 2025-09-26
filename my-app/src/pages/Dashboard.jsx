import React from 'react';
import MetricsCards from '../components/MetricsCards';
import RecentActivity from '../components/RecentActivity';
import QuickStats from '../components/QuickStats';
import DailyTripsChart from '../components/DailyTripsChart'; 

const Dashboard = ({ searchTerm }) => {
  return (
    <div className="dashboard-content">
      <MetricsCards />
      
      {/* 2. REPLACE the old Revenue Chart placeholder with the actual component */}
      <div className="chart-container-full-width">
        <DailyTripsChart />
      </div>

      <div className="dashboard-grid">
        <RecentActivity searchTerm={searchTerm} />
        <QuickStats />
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import MetricsCards from '../components/MetricsCards';
import RecentActivity from '../components/RecentActivity';
import QuickStats from '../components/QuickStats';

const Dashboard = ({ searchTerm }) => {
  return (
    <div className="dashboard-content">
      <MetricsCards />
      
      {/* Revenue Chart */}
      <div className="chart-placeholder">
        <h3>Revenue Overview</h3>
        <div className="chart-mock">
          <div className="chart-bars">
            <div className="bar" style={{ height: '60%' }}></div>
            <div className="bar" style={{ height: '80%' }}></div>
            <div className="bar" style={{ height: '45%' }}></div>
            <div className="bar" style={{ height: '90%' }}></div>
            <div className="bar" style={{ height: '70%' }}></div>
            <div className="bar" style={{ height: '85%' }}></div>
            <div className="bar" style={{ height: '65%' }}></div>
          </div>
          <div className="chart-labels">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <RecentActivity searchTerm={searchTerm} />
        <QuickStats />
      </div>
    </div>
  );
};

export default Dashboard;
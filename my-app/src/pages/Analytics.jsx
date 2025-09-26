import React, { useState } from 'react';
import DailyTripsChart from '../components/DailyTripsChart';
import { ChartBar as BarChart3, Users, Clock, MapPin, TrendingUp, Activity } from 'lucide-react';

const Analytics = ({ searchTerm }) => {
  const [analyticsData] = useState({
    totalUsers: 12894,
    activeUsers: 8456,
    avgTripDuration: 23,
    peakHours: '5-7 PM',
    userGrowth: 15.3,
    tripGrowth: 12.5
  });

  const [userActivity] = useState([
    { hour: '6 AM', users: 245 },
    { hour: '9 AM', users: 892 },
    { hour: '12 PM', users: 1456 },
    { hour: '3 PM', users: 1123 },
    { hour: '6 PM', users: 2134 },
    { hour: '9 PM', users: 1567 },
    { hour: '12 AM', users: 456 }
  ]);

  const [topRoutes] = useState([
    { route: 'Downtown → Airport', trips: 1247, revenue: '$56,115' },
    { route: 'Mall → Business District', trips: 892, revenue: '$25,376' },
    { route: 'Hotel → Convention Center', trips: 756, revenue: '$24,192' },
    { route: 'Station → University', trips: 634, revenue: '$11,412' },
    { route: 'Airport → Downtown', trips: 589, revenue: '$26,505' }
  ]);

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Analytics Dashboard</h2>
        <p>Detailed insights and performance metrics</p>
      </div>

      <div className="analytics-overview">
        {/* Total Users Card */}
        <div className="analytics-card">
          <div className="analytics-icon">
            <Users size={24} />
          </div>
          <div className="analytics-content">
            <h3>Total Users</h3>
            <p className="analytics-number">{analyticsData.totalUsers.toLocaleString()}</p>
            <div className="analytics-trend positive">
              <TrendingUp size={14} />
              <span>+{analyticsData.userGrowth}%</span>
            </div>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="analytics-card">
          <div className="analytics-icon">
            <Activity size={24} />
          </div>
          <div className="analytics-content">
            <h3>Active Users</h3>
            <p className="analytics-number">{analyticsData.activeUsers.toLocaleString()}</p>
            <div className="analytics-trend positive">
              <TrendingUp size={14} />
              <span>+{analyticsData.tripGrowth}%</span>
            </div>
          </div>
        </div>

        {/* Avg Trip Duration Card */}
        <div className="analytics-card">
          <div className="analytics-icon">
            <Clock size={24} />
          </div>
          <div className="analytics-content">
            <h3>Avg Trip Duration</h3>
            <p className="analytics-number">{analyticsData.avgTripDuration} min</p>
            <div className="analytics-info">
              <span>Peak: {analyticsData.peakHours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics-charts">
        {/* The overall charts container: we will use a grid to place the chart and routes side-by-side or stacked */}
        
        {/* 2. Integrate the DailyTripsChart, replacing the User Activity by Hour chart */}
        <div className="chart-container" style={{ gridColumn: 'span 2' }}>
          {/* Note: The DailyTripsChart component already includes its own title/styling */}
          <DailyTripsChart /> 
        </div>

        <div className="routes-analytics">
          <h3>Top Routes</h3>
          <div className="routes-list">
            {topRoutes.map((route, index) => (
              <div key={index} className="route-item">
                <div className="route-rank">#{index + 1}</div>
                <div className="route-info">
                  <div className="route-name">
                    <MapPin size={16} />
                    <span>{route.route}</span>
                  </div>
                  <div className="route-stats">
                    <span className="route-trips">{route.trips} trips</span>
                    <span className="route-revenue">{route.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
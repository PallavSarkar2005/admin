import React, { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Calendar, CreditCard } from 'lucide-react';

const Revenue = ({ searchTerm }) => {
  const [revenueData] = useState({
    totalRevenue: 184320,
    monthlyGrowth: 12.5,
    dailyAverage: 6144,
    transactions: 2847
  });

  const [revenueBreakdown] = useState([
    { category: 'Regular Trips', amount: 125400, percentage: 68, color: 'blue' },
    { category: 'Premium Rides', amount: 35200, percentage: 19, color: 'purple' },
    { category: 'Airport Transfers', amount: 18720, percentage: 10, color: 'green' },
    { category: 'Corporate Bookings', amount: 5000, percentage: 3, color: 'orange' }
  ]);

  const [monthlyRevenue] = useState([
    { month: 'Jan', amount: 145000 },
    { month: 'Feb', amount: 162000 },
    { month: 'Mar', amount: 158000 },
    { month: 'Apr', amount: 175000 },
    { month: 'May', amount: 184000 },
    { month: 'Jun', amount: 192000 }
  ]);

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Revenue Analytics</h2>
        <p>Track and analyze revenue performance</p>
      </div>

      <div className="revenue-overview">
        <div className="revenue-card main-revenue">
          <div className="revenue-icon">
            <DollarSign size={32} />
          </div>
          <div className="revenue-content">
            <h3>Total Revenue</h3>
            <p className="revenue-amount">${revenueData.totalRevenue.toLocaleString()}</p>
            <div className="revenue-growth">
              <TrendingUp size={16} />
              <span>+{revenueData.monthlyGrowth}% this month</span>
            </div>
          </div>
        </div>

        <div className="revenue-stats">
          <div className="revenue-stat">
            <div className="stat-icon">
              <Calendar size={20} />
            </div>
            <div className="stat-content">
              <h4>Daily Average</h4>
              <p>${revenueData.dailyAverage.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="revenue-stat">
            <div className="stat-icon">
              <CreditCard size={20} />
            </div>
            <div className="stat-content">
              <h4>Transactions</h4>
              <p>{revenueData.transactions.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="revenue-charts">
        <div className="chart-container">
          <h3>Monthly Revenue Trend</h3>
          <div className="revenue-chart">
            <div className="chart-bars">
              {monthlyRevenue.map((data, index) => (
                <div key={index} className="revenue-bar-container">
                  <div 
                    className="revenue-bar" 
                    style={{ height: `${(data.amount / 200000) * 100}%` }}
                  ></div>
                  <span className="bar-label">{data.month}</span>
                  <span className="bar-value">${(data.amount / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="revenue-breakdown">
          <h3>Revenue Breakdown</h3>
          <div className="breakdown-list">
            {revenueBreakdown.map((item, index) => (
              <div key={index} className="breakdown-item">
                <div className="breakdown-info">
                  <div className={`breakdown-color color-${item.color}`}></div>
                  <span className="breakdown-category">{item.category}</span>
                </div>
                <div className="breakdown-stats">
                  <span className="breakdown-amount">${item.amount.toLocaleString()}</span>
                  <span className="breakdown-percentage">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
import React from 'react';
import { Calendar, Clock, Star, AlertTriangle } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      label: 'Today\'s Trips',
      value: '147',
      icon: Calendar,
      color: 'blue'
    },
    {
      label: 'Avg Trip Time',
      value: '23 min',
      icon: Clock,
      color: 'green'
    },
    {
      label: 'Customer Rating',
      value: '4.8',
      icon: Star,
      color: 'yellow'
    },
    {
      label: 'Issues Reported',
      value: '3',
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  return (
    <div className="quick-stats">
      <h3 className="stats-title">Quick Stats</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          
          return (
            <div key={index} className={`stat-item stat-${stat.color}`}>
              <div className="stat-icon">
                <IconComponent size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickStats;
import React from 'react';
import { Car, DollarSign, Users, TrendingUp, TrendingDown } from 'lucide-react';

const MetricsCards = () => {
  const metrics = [
    {
      id: 'trips',
      title: 'Total Trips',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Car,
      color: 'blue'
    },
    {
      id: 'revenue',
      title: 'Revenue',
      value: '$184,320',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '12,894',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'bookings',
      title: 'New Bookings',
      value: '847',
      change: '-2.1%',
      trend: 'down',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  return (
    <div className="metrics-grid">
      {metrics.map((metric) => {
        const IconComponent = metric.icon;
        const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <div key={metric.id} className={`metric-card metric-${metric.color}`}>
            <div className="metric-header">
              <div className="metric-icon">
                <IconComponent size={24} />
              </div>
              <div className={`metric-trend ${metric.trend}`}>
                <TrendIcon size={16} />
                <span>{metric.change}</span>
              </div>
            </div>
            
            <div className="metric-content">
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-title">{metric.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsCards;

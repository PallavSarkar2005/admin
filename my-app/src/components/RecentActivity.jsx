import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

const RecentActivity = ({ searchTerm = '' }) => {
  const activities = [
    {
      id: 1,
      type: 'trip',
      description: 'New trip booked from Downtown to Airport',
      user: 'Alice Johnson',
      time: '2 minutes ago',
      amount: '$45.00'
    },
    {
      id: 2,
      type: 'user',
      description: 'New user registration',
      user: 'Mike Chen',
      time: '5 minutes ago',
      amount: null
    },
    {
      id: 3,
      type: 'trip',
      description: 'Trip completed - City Center to Mall',
      user: 'Sarah Wilson',
      time: '8 minutes ago',
      amount: '$28.50'
    },
    {
      id: 4,
      type: 'trip',
      description: 'Trip cancelled by customer',
      user: 'David Brown',
      time: '12 minutes ago',
      amount: '$0.00'
    },
    {
      id: 5,
      type: 'trip',
      description: 'Long distance trip - Airport to Hotel',
      user: 'Emma Davis',
      time: '15 minutes ago',
      amount: '$85.00'
    }
  ];

  const filteredActivities = activities.filter(activity =>
    activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="activity-card">
      <div className="card-header">
        <h3>Recent Activity</h3>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="activity-list">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">
              {activity.type === 'trip' ? <MapPin size={18} /> : <User size={18} />}
            </div>
            
            <div className="activity-content">
              <p className="activity-description">{activity.description}</p>
              <div className="activity-meta">
                <span className="activity-user">{activity.user}</span>
                <span className="activity-time">
                  <Clock size={14} />
                  {activity.time}
                </span>
              </div>
            </div>
            
            {activity.amount && (
              <div className="activity-amount">
                {activity.amount}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
import React, { useState } from 'react';
import { MapPin, Navigation, Users, TrendingUp } from 'lucide-react';

const Locations = ({ searchTerm }) => {
  const [locations] = useState([
    {
      id: 1,
      name: 'Downtown Plaza',
      address: '123 Main Street, Downtown',
      totalTrips: 1247,
      avgRating: 4.8,
      popularTimes: 'Peak: 8-10 AM, 5-7 PM',
      status: 'active'
    },
    {
      id: 2,
      name: 'Airport Terminal 1',
      address: 'International Airport, Terminal 1',
      totalTrips: 2156,
      avgRating: 4.6,
      popularTimes: 'Peak: 6-8 AM, 6-9 PM',
      status: 'active'
    },
    {
      id: 3,
      name: 'City Center Mall',
      address: '456 Shopping Blvd, City Center',
      totalTrips: 892,
      avgRating: 4.7,
      popularTimes: 'Peak: 12-2 PM, 6-8 PM',
      status: 'active'
    },
    {
      id: 4,
      name: 'Business District',
      address: '789 Corporate Ave, Business District',
      totalTrips: 1534,
      avgRating: 4.9,
      popularTimes: 'Peak: 7-9 AM, 5-7 PM',
      status: 'active'
    },
    {
      id: 5,
      name: 'University Campus',
      address: '321 Education Way, University',
      totalTrips: 678,
      avgRating: 4.5,
      popularTimes: 'Peak: 8-10 AM, 4-6 PM',
      status: 'maintenance'
    }
  ]);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Locations Management</h2>
        <p>Monitor and manage pickup/drop-off locations</p>
      </div>

      <div className="locations-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <MapPin size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Locations</h3>
            <p className="stat-number">{locations.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>Active Locations</h3>
            <p className="stat-number">{locations.filter(l => l.status === 'active').length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Trips</h3>
            <p className="stat-number">{locations.reduce((sum, l) => sum + l.totalTrips, 0)}</p>
          </div>
        </div>
      </div>

      <div className="locations-grid">
        {filteredLocations.map((location) => (
          <div key={location.id} className="location-card">
            <div className="location-header">
              <div className="location-name">
                <MapPin size={20} />
                <h3>{location.name}</h3>
              </div>
              <div className={`location-status ${location.status}`}>
                {location.status}
              </div>
            </div>
            
            <div className="location-address">
              <Navigation size={14} />
              <span>{location.address}</span>
            </div>
            
            <div className="location-stats">
              <div className="location-stat">
                <span className="stat-label">Total Trips</span>
                <span className="stat-value">{location.totalTrips}</span>
              </div>
              <div className="location-stat">
                <span className="stat-label">Avg Rating</span>
                <span className="stat-value">{location.avgRating}★</span>
              </div>
            </div>
            
            <div className="location-times">
              <span className="times-label">Popular Times:</span>
              <span className="times-value">{location.popularTimes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
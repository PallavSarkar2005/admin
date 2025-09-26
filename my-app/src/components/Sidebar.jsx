import React, { useState } from 'react';
import { 
  Home, 
  Car, 
  Users, 
  DollarSign, 
  BarChart3, 
  Settings, 
  FileText,
  Calendar,
  MapPin,
  Bell
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
  { id: 'trips', icon: Car, label: 'Trips' },
  { id: 'users', icon: Users, label: 'Users' },
  { id: 'revenue', icon: DollarSign, label: 'Revenue' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'bookings', icon: Calendar, label: 'Bookings' },
  { id: 'locations', icon: MapPin, label: 'Locations' },
  { id: 'reports', icon: FileText, label: 'Reports' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <Car size={28} />
          </div>
          <span className="logo-text">TripAdmin</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <IconComponent size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
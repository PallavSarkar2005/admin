import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Hop as Home, Car, DollarSign, ChartBar as BarChart3, FileText, Calendar, MapPin } from 'lucide-react';

const menuItems = [
  { id: '/', icon: Home, label: 'Dashboard', path: '/' },
  { id: 'bookings', icon: Calendar, label: 'Bookings', path: '/bookings' },
  { id: 'locations', icon: MapPin, label: 'Locations', path: '/locations' },
  { id: 'reports', icon: FileText, label: 'Reports', path: '/reports' },
  { id: 'revenue', icon: DollarSign, label: 'Revenue', path: '/revenue' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/analytics' }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
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
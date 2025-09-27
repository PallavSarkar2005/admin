// src/components/Header.jsx

import React from 'react';
import { Search, User } from 'lucide-react';

// Header now receives the current search term (value) and the update function (onSearch) from App.jsx
const Header = ({ searchTerm, onSearch }) => { 
  
  const handleSearchChange = (e) => {
    // Call the parent handler to update the global state in App.jsx
    onSearch(e.target.value); 
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your business today.</p>
      </div>
      
      <div className="header-right">
        <div className="search-box">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search trips, users, bookings..." 
            // 1. Value is controlled by the parent state (searchTerm)
            value={searchTerm || ''} 
            // 2. Change event updates the parent state
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="user-profile">
          <div className="user-avatar">
            {/* The avatar placeholder should likely show the first letter of the user's name */}
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

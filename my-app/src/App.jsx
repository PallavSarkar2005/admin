// src/App.jsx

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Locations from './pages/Locations';
import Reports from './pages/Reports';
import Revenue from './pages/Revenue';
import Analytics from './pages/Analytics';
import './App.css';

// AUTH IMPORTS
import { useAuth } from './context/AuthContext';
import LoginModal from './components/LoginModal';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { isAuthenticated, isLoading } = useAuth(); // Now relies solely on isAuthenticated

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen text-xl">Loading application...</div>;
  }

  if (!isAuthenticated) {
      return <LoginModal />; 
  }
 return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header onSearch={handleSearch} />
        
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard searchTerm={searchTerm} />} />
            <Route path="/bookings" element={<Bookings searchTerm={searchTerm} />} />
            <Route path="/locations" element={<Locations searchTerm={searchTerm} />} />
            <Route path="/reports" element={<Reports searchTerm={searchTerm} />} />
            <Route path="/revenue" element={<Revenue searchTerm={searchTerm} />} />
            <Route path="/analytics" element={<Analytics searchTerm={searchTerm} />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
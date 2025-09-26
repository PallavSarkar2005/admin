import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Locations from './pages/Locations';
import Reports from './pages/Reports';
import Revenue from './pages/Revenue';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Header onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Dashboard searchTerm={searchTerm} />} />
            <Route path="/bookings" element={<Bookings searchTerm={searchTerm} />} />
            <Route path="/locations" element={<Locations searchTerm={searchTerm} />} />
            <Route path="/reports" element={<Reports searchTerm={searchTerm} />} />
            <Route path="/revenue" element={<Revenue searchTerm={searchTerm} />} />
            <Route path="/analytics" element={<Analytics searchTerm={searchTerm} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
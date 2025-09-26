import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricsCards from './components/MetricsCards';
import RecentActivity from './components/RecentActivity';
import QuickStats from './components/QuickStats';
import './App.css';

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <div className="dashboard-content">
          <MetricsCards />
          
          <div className="chart-placeholder">
            <h3>Revenue Chart</h3>
            <div className="chart-mock">
              <div className="chart-bars">
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '45%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '85%'}}></div>
                <div className="bar" style={{height: '95%'}}></div>
              </div>
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
          
          <div className="dashboard-grid">
            <div className="grid-left">
              <RecentActivity />
            </div>
            
            <div className="grid-right">
              <QuickStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
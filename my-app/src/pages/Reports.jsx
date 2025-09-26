// src/pages/Reports.jsx

import React, { useState, useEffect } from 'react';
// Import the necessary icons, including PlusCircle for the new action button
import { FileText, Download, Calendar, DollarSign, Users, PlusCircle } from 'lucide-react'; 
// 1. Import report generation helpers and data
import { 
    dailyTripsData, 
    generateDailyTripsCSV, 
    downloadCSV 
} from '../data/reportsData'; 

const REPORTS_KEY = 'NATPAC_REPORTS';

const Reports = ({ searchTerm }) => {
  // State for the existing mock reports list (used for filtering)
  const [reports] = useState([
    { id: 1, name: 'Monthly Revenue Report', type: 'Financial', date: '2024-01-01', status: 'completed', size: '2.4 MB' },
    { id: 2, name: 'Customer Analytics Report', type: 'Analytics', date: '2021-01-05', status: 'completed', size: '1.8 MB' },
    { id: 3, name: 'Trip Performance Report', type: 'Operations', date: '2021-01-10', status: 'processing', size: '3.2 MB' },
    { id: 4, name: 'Driver Performance Report', type: 'HR', date: '2021-01-12', status: 'completed', size: '1.5 MB' }
  ]);

  // 2. NEW State for dynamically generated reports (from session storage)
  const [recentReports, setRecentReports] = useState([]);

  // Load recent reports from session storage on component mount
  useEffect(() => {
    const savedReports = sessionStorage.getItem(REPORTS_KEY);
    if (savedReports) {
        setRecentReports(JSON.parse(savedReports));
    }
  }, []);

  // Filter existing mock reports by search term
  const filteredMockReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- NEW LOGIC FUNCTIONS ---
  
  const handleGenerateReport = () => {
    // 1. Generate CSV content
    const csvContent = generateDailyTripsCSV(dailyTripsData);
    
    // 2. Create a timestamped filename
    const now = new Date();
    const dateString = now.toISOString().slice(0, 10);
    const timeString = now.toTimeString().slice(0, 8).replace(/:/g, '');
    const filename = `Daily_Trips_Report_${dateString}_${timeString}.csv`;

    // 3. Trigger the actual download
    downloadCSV(csvContent, filename);

    // 4. Update the list of recent reports (storing CSV data for redownload)
    const newReport = {
        id: Date.now(),
        name: `Daily Trips Report (${dateString})`,
        type: 'Operations', // New reports are classified as Operations
        date: now.toLocaleString(),
        status: 'completed',
        size: `${(csvContent.length / 1024).toFixed(1)} KB`,
        data: csvContent // Store data for redownload
    };

    const updatedReports = [newReport, ...recentReports];
    setRecentReports(updatedReports);
    sessionStorage.setItem(REPORTS_KEY, JSON.stringify(updatedReports));
  };
  
  const handleDownloadReport = (report) => {
    // Downloads a report from the stored CSV content
    downloadCSV(report.data, report.filename);
  };
  // --- END NEW LOGIC FUNCTIONS ---

  const reportStats = [
    { title: 'Total Reports', value: '24', icon: FileText, color: 'blue' },
    { title: 'This Month', value: '8', icon: Calendar, color: 'green' },
    { title: 'Revenue Reports', value: '$2.4M', icon: DollarSign, color: 'purple' },
    { title: 'User Reports', value: '12.8K', icon: Users, color: 'orange' }
  ];

  // Combine mock reports and newly generated reports for display
  // Note: We prioritize displaying the dynamically generated reports in the list
  const allReports = [...recentReports, ...filteredMockReports].sort((a, b) => b.id - a.id);
  
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Reports & Analytics</h2>
        <p>Generate and download business reports</p>
      </div>

      <div className="reports-stats">
        {reportStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`report-stat-card stat-${stat.color}`}>
              <div className="stat-icon">
                <IconComponent size={24} />
              </div>
              <div className="stat-content">
                <h3>{stat.title}</h3>
                <p className="stat-number">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reports-actions">
        {/* 3. ATTACH the CSV generation function to the button */}
        <button 
          className="btn-primary" 
          onClick={handleGenerateReport}
        >
          <PlusCircle size={18} className="mr-2" />
          Generate Daily Trips Report
        </button>
        <button className="btn-secondary">Schedule Report</button>
      </div>

      <div className="reports-list">
        <div className="reports-header">
          <h3>Recent Reports</h3>
        </div>
        
        {/* 4. RENDER the combined list of reports */}
        {allReports.map((report) => (
          <div key={report.id} className="report-item">
            <div className="report-info">
              <div className="report-icon">
                <FileText size={20} />
              </div>
              <div className="report-details">
                <h4>{report.name}</h4>
                <div className="report-meta">
                  <span className="report-type">{report.type}</span>
                  <span className="report-date">{report.date}</span>
                  <span className="report-size">{report.size}</span>
                </div>
              </div>
            </div>
            
            <div className="report-actions">
              <div className={`report-status ${report.status}`}>
                {report.status}
              </div>
              {(report.status === 'completed' || report.data) && ( // Check for 'data' key for new reports
                <button 
                  className="download-btn" 
                  onClick={() => report.data ? handleDownloadReport(report) : alert('Mock download triggered.')}
                >
                  <Download size={16} />
                  Download
                </button>
              )}
            </div>
          </div>
        ))}
        {allReports.length === 0 && <p className="text-gray-500 p-4">No reports found.</p>}
      </div>
    </div>
  );
};

export default Reports;

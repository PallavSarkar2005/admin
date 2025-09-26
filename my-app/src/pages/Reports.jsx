import React, { useState } from 'react';
import { FileText, Download, Calendar, TrendingUp, DollarSign, Users } from 'lucide-react';

const Reports = ({ searchTerm }) => {
  const [reports] = useState([
    {
      id: 1,
      name: 'Monthly Revenue Report',
      type: 'Financial',
      date: '2024-01-01',
      status: 'completed',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Customer Analytics Report',
      type: 'Analytics',
      date: '2024-01-05',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Trip Performance Report',
      type: 'Operations',
      date: '2024-01-10',
      status: 'processing',
      size: '3.2 MB'
    },
    {
      id: 4,
      name: 'Driver Performance Report',
      type: 'HR',
      date: '2024-01-12',
      status: 'completed',
      size: '1.5 MB'
    }
  ]);

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const reportStats = [
    {
      title: 'Total Reports',
      value: '24',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'This Month',
      value: '8',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Revenue Reports',
      value: '$2.4M',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'User Reports',
      value: '12.8K',
      icon: Users,
      color: 'orange'
    }
  ];

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
        <button className="btn-primary">Generate New Report</button>
        <button className="btn-secondary">Schedule Report</button>
      </div>

      <div className="reports-list">
        <div className="reports-header">
          <h3>Recent Reports</h3>
        </div>
        
        {filteredReports.map((report) => (
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
              {report.status === 'completed' && (
                <button className="download-btn">
                  <Download size={16} />
                  Download
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
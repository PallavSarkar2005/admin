// src/pages/Bookings.jsx

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, ListFilter as Filter } from 'lucide-react';

const Bookings = ({ searchTerm }) => {
  const [bookings] = useState([
    {
      id: 'BK001',
      customer: 'Alice Johnson',
      pickup: 'Downtown Plaza',
      destination: 'Airport Terminal 1',
      date: '2024-01-15',
      time: '14:30',
      status: 'confirmed',
      fare: '$45.00'
    },
    {
      id: 'BK002',
      customer: 'Mike Chen',
      pickup: 'City Center Mall',
      destination: 'Business District',
      date: '2024-01-15',
      time: '16:45',
      status: 'pending',
      fare: '$28.50'
    },
    {
      id: 'BK003',
      customer: 'Sarah Wilson',
      pickup: 'Hotel Grand',
      destination: 'Convention Center',
      date: '2024-01-16',
      time: '09:15',
      status: 'completed',
      fare: '$32.00'
    },
    {
      id: 'BK004',
      customer: 'David Brown',
      pickup: 'Train Station',
      destination: 'University Campus',
      date: '2024-01-16',
      time: '11:20',
      status: 'cancelled',
      fare: '$18.75'
    }
  ]);

  // The filtering logic is already robust: checks customer, pickup, destination, and ID.
  const filteredBookings = bookings.filter(booking =>
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.status.toLowerCase().includes(searchTerm.toLowerCase()) // Added status check for completeness
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Bookings Management</h2>
        <p>Manage and track all customer bookings</p>
      </div>

      <div className="page-actions">
        <button className="btn-primary">New Booking</button>
        <button className="btn-secondary">
          <Filter size={16} />
          Filter
        </button>
      </div>

      <div className="bookings-grid">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-header">
                <div className="booking-id">#{booking.id}</div>
                <div className={`booking-status ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </div>
              </div>
              
              <div className="booking-customer">
                <User size={16} />
                <span>{booking.customer}</span>
              </div>
              
              <div className="booking-route">
                <div className="route-item">
                  <MapPin size={14} />
                  <span>{booking.pickup}</span>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-item">
                  <MapPin size={14} />
                  <span>{booking.destination}</span>
                </div>
              </div>
              
              <div className="booking-details">
                <div className="detail-item">
                  <Calendar size={14} />
                  <span>{booking.date}</span>
                </div>
                <div className="detail-item">
                  <Clock size={14} />
                  <span>{booking.time}</span>
                </div>
                <div className="booking-fare">{booking.fare}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-10 text-gray-500 bg-white rounded-xl shadow-lg">
              No bookings found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;

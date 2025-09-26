// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth(); 

  // Display a loading message while checking auth status
  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  // If the user is authenticated, render the nested routes (<Outlet>)
  // If not authenticated, redirect them to the root path where App.jsx will show the LoginModal
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />; 
};

export default ProtectedRoute;
// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false); 

  useEffect(() => {
    // --- CRITICAL CHANGE: Force logout on load ---
    // If a token exists from a previous session, discard it to force re-login.
    localStorage.removeItem('authToken'); 
    
    // Set a timeout to simulate loading, ensuring the modal doesn't flash immediately
    const timer = setTimeout(() => {
        setIsAuthenticated(false);
        setUser(null);
        setShowLoginModal(true); // Always show modal
        setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  const login = async (credentials) => {
    // === DUMMY LOGIN LOGIC ===
    if (credentials.username === 'admin' && credentials.password === 'password') {
      // We still set the token, but it will be instantly cleared on the next reload
      localStorage.setItem('authToken', 'dummy_admin_token'); 
      setIsAuthenticated(true);
      setUser({ username: credentials.username });
      setShowLoginModal(false); 
      return true;
    } else {
      console.error('Login failed: Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
    setShowLoginModal(true); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, showLoginModal, setShowLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
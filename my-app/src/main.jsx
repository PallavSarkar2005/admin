// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. IMPORT the necessary components
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Make sure this path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. WRAP the App with BrowserRouter for routing */}
    <BrowserRouter>
      {/* 3. WRAP the App with AuthProvider for global state */}
      <AuthProvider> 
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
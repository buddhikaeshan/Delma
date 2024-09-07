import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuthenticated }) => {
  // Check if the user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return Component;
};

export default ProtectedRoute;

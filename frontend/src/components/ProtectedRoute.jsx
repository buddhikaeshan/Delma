import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // Check if the token is available in localStorage to keep the user authenticated
  const token = localStorage.getItem("token");

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

export function isAuthenticated() {
  const user = localStorage.getItem('user');
  return !!user;
}

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// src/authentication/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // or any token key you're storing

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;

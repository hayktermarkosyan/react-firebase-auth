import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const HomeProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default HomeProtectedRoute;
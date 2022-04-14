import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const SignuoProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  
  if (!user) {
    return children;
  }
  return <Navigate to="/home" />;
};

export default SignuoProtectedRoute;
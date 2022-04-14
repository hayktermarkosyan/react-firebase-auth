import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const SignupProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  
  if (!user) {
    return children;
  }
  return <Navigate to="/home" />;
};

export default SignupProtectedRoute;
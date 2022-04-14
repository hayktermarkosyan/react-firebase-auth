import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const LoginSignupProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default LoginSignupProtectedRoute;
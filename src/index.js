import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { UserAuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);
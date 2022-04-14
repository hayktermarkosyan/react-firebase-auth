import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginSignupProtectedRoute from "./components/LoginSignupProtectedRoute"
import { UserAuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                exact
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route 
                exact 
                path="/" 
                element={
                  <LoginSignupProtectedRoute>
                    <Login />
                  </LoginSignupProtectedRoute>
                }
              />
              <Route 
                exact
                path="/signup" 
                element={
                  <LoginSignupProtectedRoute>
                    <Signup />
                  </LoginSignupProtectedRoute>
                } 
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
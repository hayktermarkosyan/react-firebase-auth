import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUserAuth } from "./context/AuthContext";

function App() {
  const { user } = useUserAuth();

  console.log(user)
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
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
                element={user ? <Home /> : <Login />}
              />
              <Route 
                exact
                path="/signup" 
                element={user ? <Home /> : <Signup />} 
              />
            </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
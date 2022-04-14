import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomeProtectedRoute from "./components/HomeProtectedRoute";
import LoginProtectedRoute from "./components/LoginProtectedRoute";
import SignupProtectedRoute from "./components/SighupProtectedRoute";
import { UserAuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <HomeProtectedRoute>
                    <Home />
                  </HomeProtectedRoute>
                }
              />
              <Route path="/" 
                element={ 
                  <LoginProtectedRoute>
                    <Login />
                  </LoginProtectedRoute>
                } 
              />
              <Route path="/signup" 
                element={
                  <SignupProtectedRoute>
                    <Signup />
                  </SignupProtectedRoute>
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
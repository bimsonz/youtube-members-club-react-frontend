import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { Card, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import "../css/dark-mode.css"

function App() {

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card className="border-0">
                    <Card.Body >
                        <h1 className="text-center ">SPLITGATE.CLUB</h1>
                    </Card.Body>
                </Card>
                <Card className="border-0">
                    <Card.Body className="text-center">
                        <p>LFG made easy.</p>
                        <p>Sign up for early access to our ALPHA.</p>
                        <p>More info SPLITGATE.CLUB <a href="https://youtu.be/K5OXUkU0abE">HERE</a> </p>
                    </Card.Body>
                </Card>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <ProtectedRoute exact path="/" component={Dashboard} />
                            <ProtectedRoute path="/update-profile" component={UpdateProfile} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    )
}

export default App;

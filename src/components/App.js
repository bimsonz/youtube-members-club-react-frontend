import React, {useEffect, useState} from "react";
import GA4React from "ga-4-react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import {Alert, Card, Container, Toast} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import "../css/dark-mode.css"
import {getToken} from "firebase/messaging";
import {onMessageListener} from "../firebase";


// const ga4react = new GA4React("G-L2P527SMTM");
// ga4react.initialize()

function App() {


    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title: '', body: ''});
    const [isTokenFound, setTokenFound] = useState(false);

    onMessageListener().then(payload => {
        setShow(true);
        setNotification({title: payload.notification.title, body: payload.notification.body})
        console.log(payload);
    }).catch(err => console.log('failed: ', err));
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    minWidth: 200
                }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{notification.title}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{notification.body}</Toast.Body>
                </Toast>
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

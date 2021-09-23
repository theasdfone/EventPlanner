import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";
import { Button } from '@material-ui/core'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <LandingHeader />
            <div class="eventVideo"><h1 style={{ paddingTop: "200px" }}>Welcome to your Event Planner!</h1></div>
            <Link to="/register"><Button class="btnRegister" variant="contained">Get Started</Button></Link>
            <Footer />
        </div>

    );
}

export default LandingPage;
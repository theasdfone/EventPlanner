import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";

function LandingPage(){
    return (
        <div>
            <LandingHeader/>
            <h1>Have an Event that needs Planning?</h1>
            <h1>Try Event Planner!</h1>
            <br/>
            <Footer />
        </div>

    );
}

export default LandingPage;
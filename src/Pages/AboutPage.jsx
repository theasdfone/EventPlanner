import React from "react";
import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div>
            <LandingHeader />
            <div class="textContainer">
                <h1>About Event Planner</h1><br></br>
                <div style={{ fontSize: "20px" }}>
                    <p>Event planner is a free calendar planning website for important events happening throughout your day to day.
                        This website allows you to organize meetings big or small, schedule deadlines, or plan a birthday party! Here are some unique features
                        you may find interesting:
                    </p>
                    <br></br>
                    <ul>
                        <li>Job scheduling and work deadlines</li>
                        <li>Class schedules and due dates</li>
                        <li>Extra-curricular/Club meetings</li>
                        <li>Job scheduling and work deadlines</li>
                    </ul>
                    <br></br>
                    <img src="../images/About.png" alt=""/>
                    <br></br>
                    <p style={{marginBottom: "50px"}}>Weeks at a glance will show you everything coming up so you never miss a date!
                    Follow up on your custom calendar to see more indepth details of your schedule.</p>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default AboutPage;
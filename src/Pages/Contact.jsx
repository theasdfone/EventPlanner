import React from "react";
import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <LandingHeader />
            <div class="textContainer">
                <h1>Contact us for more info</h1><br></br>
                <p>We're happy to answer any questions or inquiries you may have!</p>
                <br></br>
                <div style={{ fontSize: "20px" }}>
                    <h2>Sam Zhu</h2>
                    <br></br>
                    <ul>
                        <li>Email: y555zhu@uwaterloo.ca</li>
                        <li>Github: <a style={{ color: "blue" }} href="github.com/theasdfone">github.com/theasdfone</a></li>
                        <li>Linkedin: <a style={{ color: "blue" }} href="linkedin.com/in/theasdfone">linkedin.com/in/theasdfone</a></li>
                    </ul>
                    <h2 style={{ marginTop: "50px" }}>Zain-Ul-Abideen Altaf</h2><br></br>
                    <ul style={{ marginBottom: "300px" }}>
                        <li>Email: zaltaf@uwaterloo.ca</li>
                        <li>Github: <a style={{ color: "blue" }} href="https://github.com/zain-altaf">github.com/zain-altaf</a></li>
                        <li>Linkedin: <a style={{ color: "blue" }} href="https://www.linkedin.com/in/zain-ul-abideen-altaf/">inkedin.com/in/zain-ul-abideen-altaf/</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div >

    );
}

export default Contact;
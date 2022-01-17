import React from "react";
import { Link } from "react-router-dom";
import Settings from "../components/Settings";

function LandingHeader() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-area">
                    <h1><Link to="/" className="title">EVENT PLANNER</Link></h1>
                </div>

                <ul className="navigation">
                    <Link to="/login"><li>Login</li></Link>
                    <Settings/>
                </ul>
            </div>
        </header>
    );
}

export default LandingHeader;
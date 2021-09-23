import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function LandingHeader() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-area">
                    <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
                </div>



                <ul className="navigation">
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </div>
        </header>
    );
}

export default LandingHeader;
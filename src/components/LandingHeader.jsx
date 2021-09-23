import React from "react";
import { Link } from "react-router-dom";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { IconButton } from '@material-ui/core'

function LandingHeader() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-area">
                    <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
                </div>

                <ul className="navigation">
                    <Link to="/login"><li>Login</li></Link>
                    <IconButton><SettingsApplicationsIcon color="primary" fontSize="large" /></IconButton>
                </ul>
            </div>
        </header>
    );
}

export default LandingHeader;
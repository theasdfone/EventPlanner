import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-area">
                    <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
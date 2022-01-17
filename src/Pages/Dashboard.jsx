import React from 'react'
import { Link } from "react-router-dom";
import Settings from "../components/Settings";
// import ToDo from '../components/dashboard-components/ToDo';
// import OtherCal from '../components/dashboard-components/OtherCal';
import Footer from "../components/Footer"

function Dashboard(){
    return(
        <div>
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
                    </div>

                    <ul className="navigation">
=                        <Settings/>
                    </ul>
                </div>
            </header>
            {/* <ToDo/> */}
            {/* <OtherCal/> */}
            <Footer/>



            {/* Weekly Calendar View */}
            {/* To do checklist */}
            {/* Different Calendar Swapping Options */}
        </div>
    );
}

export default Dashboard

import React from 'react'
import { Link } from "react-router-dom";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { IconButton } from '@material-ui/core'
import ToDo from '../components/dashboard-components/ToDo';
import OtherCal from '../components/dashboard-components/OtherCal';
import Footer from "../components/Footer"

const Dashboard = () => {
    return(
        <div>
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
                    </div>

                    <ul className="navigation">
                        <Link to="/settings"><li>Settings</li></Link>
                    </ul>
                </div>
            </header>
            <WCalendar/>
            <ToDo/>
            <OtherCal/>
            <Footer/>



            {/* Weekly Calendar View */}
            {/* To do checklist */}
            {/* Different Calendar Swapping Options */}
        </div>
    )
}

export default Dashboard

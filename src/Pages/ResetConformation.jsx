import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import Form from "../components/Form";
import Button from "../components/Button";

function ResetConformation(){
    return(
        <div>
            <Header/>
            <div className="main-div">
                <Form 
                    subtitle="If you entered a valid email you should recieve instructions to reset your password"
                />
                <Link to="/login"><Button name = "Back to Login"/></Link>
            </div>
            <Footer/>
        </div>
    );
}

export default ResetConformation;
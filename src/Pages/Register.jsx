import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import Form from "../components/Form";
import Inputs from "../components/Inputs";
import Button from "../components/Button";


function Register(){
    return(
        <div>
            <Header />
            <div className="main-div">
            <Form 
                subtitle="Register Today!"
            />
            <form className="main-form">
                <Inputs
                    iType="email"
                    pHolder="Email"
                />
                <Inputs
                    iType="tel"
                    pHolder="Phone Number"
                />
                <Inputs
                    iType="password"
                    pHolder="Password"
                />
                <Inputs
                    iType="password"
                    pHolder="Re-enter Password"
                />
            </form>

            <Button 
                name = "Register"
            />

            </div>
            <Footer/>
        </div>
    );
}

export default Register;
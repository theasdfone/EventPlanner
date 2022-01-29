import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import Form from "../components/Form";
import Inputs from "../components/Inputs";
import {Button} from '@material-ui/core'

function ForgotPassword(){
    return(
        <div>
            <Header />
            <div className="main-div">

                <Form
                    subtitle="Enter your email below to reset your password"
                />
                <form className="main-form">
                    <Inputs
                        iType="email"
                        pHolder="Email"
                    />
                </form>

                <Link to="/reset-conformation"><Button class="btn" variant="contained">Reset</Button></Link>

            </div>
            <Footer/>
        </div>
    );
}

export default ForgotPassword;
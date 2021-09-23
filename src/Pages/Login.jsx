import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Inputs from "../components/Inputs";
import Clickables from "../components/Clickables";
import { Button } from '@material-ui/core'

function Login() {
    return (
        <div>
            <Header />
            <div className="main-div">
                <Form
                    subtitle="Please login to continue"
                />
                <form className="main-form">
                    <Inputs
                        iType="text"
                        pHolder="Username"
                    />
                    <Inputs
                        iType="password"
                        pHolder="Password"
                    />
                </form>

                <Clickables
                    class="forgot-password"
                    route="/forgotpassword"
                    text="Forgot Password?"
                />

                <Button class="btn" variant="contained">Login</Button>


                <Clickables
                    class="signup"
                    route="/register"
                    text="Sign Up Today!"
                />

            </div>
            <Footer />
        </div>
    );
}

export default Login;
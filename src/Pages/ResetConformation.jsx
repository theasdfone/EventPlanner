import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import Form from "../components/Form";
import {Button} from '@material-ui/core'

function ResetConformation(){
    return(
        <div>
            <Header/>
            <div className="main-div" style={{marginBottom: "250px"}}>
                <Form
                    subtitle="If you entered a valid email you should recieve instructions to reset your password"
                />
                <Link to="/login"><Button class="btn" variant="contained">Back to Login</Button></Link>
            </div>
            <Footer/>
        </div>
    );
}

export default ResetConformation;
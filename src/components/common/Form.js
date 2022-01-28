// dependencies imports
import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StylesProvider } from '@mui/styles';

//pages/components imports
import SubmitButton from './SubmitButton';
import Header from '../Header';
import Form from '../Form';
import { Button, makeStyles } from '@material-ui/core'
import Inputs from "../Inputs";
// import styles from './form.css';
import Footer from '../Footer';

export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {

    return (
        <div>
            <Header/>
            <div className="main-div">
                <Form
                  subtitle= {`Please ${title} to continue`}
                />
                <form className="main-form">
                    <Inputs
                        iType="text"
                        pHolder="Username"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Inputs
                        iType="password"
                        pHolder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* This block you can kinda ignore and not too much of a deal */}
                    {/* <TextField
                        id="email"
                        label="Enter an Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        color="primary"
                        fullWidth
                    />

                    <TextField
                    id="password"
                    label="Enter a Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    color="primary"
                    fullWidth
                    /> */}
                </form>
                <SubmitButton
                    colorInherit
                    title={title}
                    handleAction={handleAction}
                />
            </div>
            <Footer/>
        </div>
    );
}

// ================================================================= LOGIN PAGE =================================================================
// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// import Form from "../components/Form";
// import Inputs from "../components/Inputs";
// import Clickables from "../components/Clickables";
// import { Button } from '@material-ui/core'

// function Login() {
//     return (
//         <div>
            // <Header />
            // <div className="main-div">
            //     <Form
            //         subtitle="Please login to continue"
            //     />
            //     <form className="main-form">
                    // <Inputs
                    //     iType="text"
                    //     pHolder="Username"
                    // />
            //         <Inputs
            //             iType="password"
            //             pHolder="Password"
            //         />
            //     </form>

            //     <Clickables
            //         class="forgot-password"
            //         route="/forgotpassword"
            //         text="Forgot Password?"
            //     />

            //     <Button class="btn" variant="contained">Login</Button>


            //     <Clickables
            //         class="signup"
            //         route="/register"
            //         text="Sign Up Today!"
            //     />

            // </div>
            // <Footer />
//         </div>
//     );
// }

// export default Login;

// ================================================================= REGISTER PAGE =================================================================
// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {Link} from "react-router-dom";
// import Form from "../components/Form";
// import Inputs from "../components/Inputs";
// import {Button} from '@material-ui/core'

// function Register(){
//     return(
//         <div>
//             <Header />
//             <div className="main-div">
//             <Form
//                 subtitle="Register Today!"
//             />
//             <form className="main-form">
//                 <Inputs
//                     iType="email"
//                     pHolder="Email"
//                 />
//                 <Inputs
//                     iType="tel"
//                     pHolder="Phone Number"
//                 />
//                 <Inputs
//                     iType="password"
//                     pHolder="Password"
//                 />
//                 <Inputs
//                     iType="password"
//                     pHolder="Re-enter Password"
//                 />
//             </form>

//             <Button class="btn" variant="contained">Register</Button>

//             </div>
//             <Footer/>
//         </div>
//     );
// }

// export default Register;
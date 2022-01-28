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

const useStyles = makeStyles(() => ({
    field: {
        marginBottom : '10px',
    },

    // btn: {
    //     marginTop: "10px",
    //     marginLeft: "5px",
    //     width: "100%",
    //     padding: "12px 10px",
    //     border: "3px solid black",
    //     fontSize: "18px",
    //     borderRadius: "30px",
    //     backgroundColor: "white",
    //     marginBottom: "10px",

    //   }
  }));

export default function BasicTextFields({ title, setPassword, setEmail, setPhone, handleAction }) {

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className="main-div">
                <Form
                  subtitle= {`Please ${title} to continue`}
                />
                <form className="main-form">
                <div className={classes.field}>
                    <TextField
                        id="email"
                        label="Enter an Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        color="primary"
                        fullWidth
                    />
                </div>
                <div>
                    <div className={classes.field}>
                        <TextField
                        id="password"
                        label="Enter a Password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        color="primary"
                        fullWidth
                        />
                    </div>
                </div>
                {
                    title === "register" ?
                    <TextField
                    id="phone"
                    label="Enter a Phone Number"
                    variant="outlined"
                    onChange={(e) => setPhone(e.target.value)}
                    color="primary"
                    fullWidth
                    /> :
                    null
                }


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
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingHeader from "./LandingHeader";


// Importing the different pages
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetConformation from "../Pages/ResetConformation";


function App(){
    return (
        <BrowserRouter>
            <div>

            {/* {window.location.href="/" ? <LandingHeader/> : <Header/>} */}

            </div>
                <Switch>
                    <Route path="/" component={LandingPage} exact/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/forgotpassword" component={ForgotPassword}/>
                    <Route path="/reset-conformation" component={ResetConformation}/>
                </Switch>
            
        </BrowserRouter>
    );
}

export default App;
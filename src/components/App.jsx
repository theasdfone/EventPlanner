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
import AboutPage from "../Pages/AboutPage";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";



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
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            
        </BrowserRouter>
    );
}

export default App;
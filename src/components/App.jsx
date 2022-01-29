//importing packages
import {React, useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import Form from './common/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Importing the different pages
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetConformation from "../Pages/ResetConformation";
import AboutPage from "../Pages/AboutPage";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Home from "./Home";

//Firebase imports
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


function App() {
    // 2. creating state over here. setEmail and setPassword are functions passed to the Form.js
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //8. This will allow us to navigate the user to another page and we have moved <Router><Router/> to index because these 2 don't get along well
    let navigate = useNavigate();

    //3. here we are creating a handleAction function which will trigger either login or register check SubmitButton for 4.
    const handleAction = (id) => {
        // 6. destructure the auth to be able to use it
        const authentication = getAuth();
        //11. this will control login,
        if (id === 1) {
          signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
              navigate('/home')
              sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            //14. This will catch whether the email entered is incorrect or password
            .catch((error) => {
              console.log(error.code)
              if (error.code === 'auth/wrong-password') {
                toast.error('Please check the Password');
              }
              if (error.code === 'auth/user-not-found') {
                toast.error('Please check the Email');
              }
            })
        }
        if (id === 2) {
          // 7. Here we create a user and renavigate them to the home screen
          createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
              console.log("Success")
              navigate('/home')
              sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            //12. This will catch the duplicate email issue
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                toast.error('Email Already in Use');
              }
            })
        }
    }

    //10. from 9, if you are successful or unsuccessful, it pushes you accordingly so registered and trying to register again, it pushes you to your dashboard
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
          navigate('/home')
        }
      },
      [])

    return (
      // 1. wrap in Router to allow the app to get routes
      <div className="App">
        <>
            {/* 13. this will allow for you to display error messages */}
            <ToastContainer/>
            <Routes>
                {/* individual routes can be formatted as so */}
                {/* LOGIN ROUTE */}
                {/* 5. 1 and 2 are passed for the corresponding routes so that when handleAction is called then we know which it is*/}
                <Route
                path='/login'
                element={
                    <Form
                    title="Login"
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(1)}
                    />}
                />
                {/* REGISTER ROUTE */}
                <Route
                path='/register'
                element={
                    <Form
                    title="Register"
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(2)}
                    />}
                />

                {/* This should take the user to their unique homepage if logged in */}
                <Route
                path='/home'
                element={
                    <Home />}
                />
            </Routes>
        </>
      </div>
    );
  }

  export default App;
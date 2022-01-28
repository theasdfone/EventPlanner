import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Home() {

    //15. This will handle the logout of the person pushes them to the login
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();

    //9. This function is called each time the component is loaded or mounted
    //if the authentication is successful and the token is established then it goes to the Dashboard
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/register')
        }
    }, [])
    return (
        <div>
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        {/* TO DO: fix the UI here with the drop down */}
                        <h1><Link to="/home" className="title">EVENT <span>PLANNER</span></Link></h1>
                    </div>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </header>
            {/* <button onClick={handleLogout}>Log out</button> */}
        </div>
    )
}


// import React from 'react'
// import { Link } from "react-router-dom";
// import Settings from "../components/Settings";
// // import ToDo from '../components/dashboard-components/ToDo';
// // import OtherCal from '../components/dashboard-components/OtherCal';
// import Footer from "../components/Footer"

// function Dashboard(){
//     return(
//         <div>
//             <header className="header">
//                 <div className="header-content">
//                     <div className="logo-area">
//                         <h1><Link to="/" className="title">EVENT <span>PLANNER</span></Link></h1>
//                     </div>

//                     <ul className="navigation">
// =                        <Settings/>
//                     </ul>
//                 </div>
//             </header>
//             {/* <ToDo/> */}
//             {/* <OtherCal/> */}
//             <Footer/>



//             {/* Weekly Calendar View */}
//             {/* To do checklist */}
//             {/* Different Calendar Swapping Options */}
//         </div>
//     );
// }

// export default Dashboard

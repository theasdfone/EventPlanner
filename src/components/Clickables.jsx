import React from "react";
import {Link} from "react-router-dom";

function Clickables(props){
        return (
            <div className={props.class}>
                <Link to={props.route}><p>{props.text}</p></Link>
            </div>
    );   
}

export default Clickables;
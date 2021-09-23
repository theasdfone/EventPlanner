import React from "react";

function Form(props){
    
    return(
        <div>
            <div className="title">Event Planner</div>
            <div className="subtitle">{props.subtitle}</div>
        </div>
    );
    
}

export default Form;
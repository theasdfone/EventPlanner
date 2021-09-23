import React from "react";

function Inputs(props){
        return (
        <div className="input-div">
            <input type={props.iType} placeHolder={props.pHolder}></input>
        </div>
    );   
}

export default Inputs;
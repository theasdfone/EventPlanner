import React from "react";

function Inputs(props){
        return (
        <div className="input-div">
            <input type={props.iType} placeHolder={props.pHolder} onChange={props.onChange}></input>
        </div>
    );
}

export default Inputs;
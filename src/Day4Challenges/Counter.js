import React, { useState } from "react"

const Counter = (props) => {


return(
    <div>
    <p style={props.style}>
        <strong>{props.inital}</strong>
    </p>
    <button  onClick={ props.onChangeP }><strong>+</strong></button> 
    <button  onClick={ props.onChangeN }><strong>-</strong></button>
    </div>
)
     
};
export default Counter;

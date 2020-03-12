import React, { useReducer, useState } from "react"

const initial = { clicked: false };

const reducer = (state,action) => {
    switch(action.type){
        case "CLICKED":
            return {...state, clicked: !state.clicked};

        default:
            return state;
    }
}

const Clicked3 = () => {

const [state,dispatch]= useReducer(reducer,initial)
 
  return <p onClick={()=>dispatch({type:"CLICKED"})}>{state.clicked == true ? 'Clicked!!!!' : 'Not Clicked!!!!'}</p>;
}
export default Clicked3;


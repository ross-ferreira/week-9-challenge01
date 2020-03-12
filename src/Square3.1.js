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

const Square3 = ({square}) => {

const [state,dispatch]= useReducer(reducer,initial)

const styles1= {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: (state.clicked==true ? square : 'pink'),
    display: 'inline-block',
  }
 
  return <div style={styles1} onClick={()=>dispatch({type:"CLICKED"})}></div>;

}
export default Square3;
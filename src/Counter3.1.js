import React, { useReducer, useState } from "react"



const reducer = (state,action) => {
    switch(action.type){
        case "CLICKEDP":
            return {...state, counter:state.counter < action.max? state.counter + 1 : action.max};
            case "CLICKEDN":
                return {...state, counter: state.counter > 0 ? state.counter - 1 : 0};

        default:
            return state;
    }
}


const Counter3 = (props) => {

const initialState = { counter: props.initial };

const [state,dispatch]= useReducer(reducer,initialState)
 
  return (
  <div>
  <p>
      <strong>{state.counter}</strong>
  </p>
  <button onClick={()=>dispatch({type:"CLICKEDP", max: props.max})}><strong> + </strong></button> 
  <button onClick={()=>dispatch({type:"CLICKEDN"})}><strong> - </strong></button>
  </div>
  )
}
export default Counter3;
import React, {useReducer}  from "react";

//Reducer Function
const reducer = (state,action) => {
    switch(action.type){
        case "increment":
            return state + 1;
        case "decrement":
            return state -1;
        default:
            return state;
    }
}
//Functional Component
const ReducerTest1 = () => {
    const [count,dispatch] = useReducer(reducer,0);

    return (
        <>
            <div>Count: {count} </div>
            <button onClick={()=>dispatch({type:"increment"})}> + </button>
            <button onClick={()=>dispatch({type:"decrement"})}> - </button>
        </>
    );
};

export default ReducerTest1;

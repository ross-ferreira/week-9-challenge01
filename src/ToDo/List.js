import React, { useReducer, useState } from "react"


const addItem = (state, {value}) => {
    return {...state, items: [...state.items,{task: value,completed: false }]};
}


const reducer = (state, action) => {
switch(action.type){
case "NEW_ITEM":
    return addItem(state, action);
    
    default: return state;
    };     

};



const ListRed = () => {

    const initial = { items: [] };
    const [state,dispatch]= useReducer(reducer,initial)
     
      return (
        <div>
            <ul>
                {state.items.tasks.map((item, index) => (
                    <li className="page-item" key={ index }>
                        {item} 
                    </li>
            ))}
            </ul>
        <button onClick={()=>dispatch({type:"New_ITEM", })}><strong> Add </strong></button> 
 
        </div>
        )
    }
    export default ListRed;
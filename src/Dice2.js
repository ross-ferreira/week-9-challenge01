import React, { useState } from "react";


 const Dice2 = ({sides}) => {

  const [state, setState] = useState(0);
 
  const updateState = () => {
    let random= Math.random();
    let state=Math.floor(random * sides +1 );
    setState(state)
    };


  


  return (
    <div>
        <p>
          {state}
        </p>
        <button onClick={updateState }>Roll</button> 
    </div>
    )
}
export default Dice2;

//({square}) we have deconstructured it from "props" saves us from writing "props.square"
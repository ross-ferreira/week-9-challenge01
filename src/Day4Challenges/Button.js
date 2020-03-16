import React, { useState } from "react"

const Button = ({ handleUpdate }) => {

  const [counter, setCounter] = useState(0);
  const updateCounter = () => setCounter(counter + 1);
  handleUpdate(counter);


return(
    <div>
    <button  className="btn btn-primary" onClick={ ()=> updateCounter() }><strong>Clicked!!!</strong></button>
    </div>
)
     
};
export default Button;

//DONT FORGET to wrap UPDATECOUNTER() in an anonymous funciton to prevent constant rendering 


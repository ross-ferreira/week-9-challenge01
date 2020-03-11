import React, { useState } from "react";


 const StepCounter2 = ({step, max}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter

  const [counter, setCounter] = useState(0);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounterPos = () => setCounter(counter < max? counter + step : max);
  const updateCounterNeg = () => setCounter(counter > 0 ? counter - step : 0);

  return (      
    <div>
    <p>
        <strong>{counter}</strong>
    </p>
    <button  onClick={ updateCounterPos }><strong>+</strong></button> 
    <button  onClick={ updateCounterNeg }><strong>-</strong></button>
    </div>
  );
}
export default StepCounter2;
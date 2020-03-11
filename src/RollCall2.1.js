import React, { useState } from "react";


 const RollCall2 = ({names}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter

  const [counter, setCounter] = useState(0);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounter = () => setCounter(counter < names.length-1 ? counter + 1 : counter * 0);



  return (      
    <div>
        <p>
            <strong>{names[counter]}</strong>
        </p>
        <button onClick={ updateCounter }>
            <strong>Next</strong>
        </button> 
    </div>
  );
}
export default RollCall2;
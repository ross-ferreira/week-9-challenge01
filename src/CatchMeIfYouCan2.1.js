import React, { useState } from "react";


 const Counter2 = ({jump}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter

  const [counter, setCounter] = useState(0);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounter = () => setCounter(counter + jump);

  const styles1= {
    margin: '20px',
    height: '50px',
    position: 'relative',
    top: counter,
  }

  return (      

    <button style={styles1} onClick={ updateCounter }><strong>Bye Bye Bye</strong></button> 

  );
}
export default Counter2;
import React, { useState } from "react";


 const Square2 = ({square}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter
  const [counter, setCounter] = useState(0);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounter = () => setCounter(counter + 1);
  // display counter and setup click handler

  const styles1= {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: (counter % 2 === 0 ? square : 'pink'),
    display: 'inline-block',
  }


  return <div style={styles1} onClick={ updateCounter }></div>
}
export default Square2;

//({square}) we have deconstructured it from "props" saves us from writing "props.square"
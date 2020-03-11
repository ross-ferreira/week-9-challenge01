import React, { useState } from "react";


 const Colours2 = ({colours}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter
  const [counter, setCounter] = useState(0);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounter = () => setCounter(counter < colours.length-1 ? counter + 1 : counter * 0);
  // display counter and setup click handler

  const styles1= {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: colours[counter],
    display: 'inline-block',
  }


  return <div style={styles1} onClick={ updateCounter }></div>
}
export default Colours2;

//({square}) we have deconstructured it from "props" saves us from writing "props.square"
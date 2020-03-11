import React, { useState } from "react";


 const Counter2 = ({initial, max}) => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter

  const [counter, setCounter] = useState(initial);
  // the event handler
  // uses the provided function to set the value of counter
  const updateCounterPos = () => setCounter(counter < max? counter + 1 : max);
  const updateCounterNeg = () => setCounter(counter > 0 ? counter - 1 : 0);



  const styles1= {
    margin: '20px',
    width: '50px',
    height: '50px',
    backgroundColor: 'pink',
    display: 'block',
    textAlign:'center',
    padding: "10px 0px 0px 0px ",
  };

const styles2= {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    display: 'inline-block',
    textAlign:'center',
    padding: "10px 10px 10px 10px ",
  };


  return (      
    <div>
    <p style={styles1} >
        <strong>{counter}</strong>
    </p>
    <button style={styles2} onClick={ updateCounterPos }><strong>+</strong></button> 
    <button style={styles2} onClick={ updateCounterNeg }><strong>-</strong></button>
    </div>
  );
}
export default Counter2;
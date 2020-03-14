import React, { useState } from "react"
import Square from './Square';

const Squares = (props) => {

const [selected, setState] = useState(0);

const updateS1 = () => setState(1);
const updateS2 = () => setState(-1);

// setState isnt object based and accepts integers unless you specifically want to give it an object
// hence we use (1) and (-1) to update state, if you wanted yo use object then use reducer()
// REMEMBER selected is STATE
 
  return (
      <>
      <Square selected={ selected === 1 } colour={props.square} name="First"  onChange={updateS1}/>
      <Square selected={ selected === -1} colour={props.square} name="Second"  onChange={updateS2}/>
      </>
  )

}
export default Squares;


//NO REDUCE USED IN THIS
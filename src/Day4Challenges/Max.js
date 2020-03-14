import React, { useState } from "react"
import Counter from './Counter';

const Max = (props) => {

const [counter, setCounter] = useState(props.count);
console.log(counter);

const updateCounterPos = (indexToChange) => {
    const newValue = counter.map((item,index)=> {
        return index === indexToChange ? item + 1 : item
    })
    setCounter(newValue)
    console.log(newValue);
    
};

const updateCounterNeg = (indexToChange) => {
    const newValue = counter.map((item,index)=> {
        return index === indexToChange ? item - 1 : item
    })
    setCounter(newValue)
    console.log(newValue);
    
};


 
  return (
      <>
        {props.count.map((item, index) => (
            <Counter 
                className="page-item" 
                key={ index } 
                inital={counter[index]} 
                onChangeP={()=>updateCounterPos(index)} 
                onChangeN={()=>updateCounterNeg(index)}
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: ((counter.map((itm,dex)=> {return dex===index && (itm >= (Math.max.apply(null, counter)) )}))  ? 'green': 'blue'),
                  }} 
            />
        ))
        }
      </>
  )

}
export default Max;





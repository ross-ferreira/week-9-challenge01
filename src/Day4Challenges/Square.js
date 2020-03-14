import React, { useState } from "react"

const Square = ({colour,selected,onChange}) => {


return(
    <div
        style={{
                margin: 50,
                width: 50,
                height: 50,
                backgroundColor: (selected ? colour : 'pink'),
                display: 'inline-block',
              }} onClick={ onChange }>
    </div>
)
     
};
export default Square;




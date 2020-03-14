import React, { useState } from "react"

const Password = (props) => {


return(
    <div>
        <label>{ props.name }</label>
        <input 
            placeHolder="Enter Password" 
            type="password"  
            onChange={ (e)=>  props.onChange(e.target.value) } 
            name={props.name } 
            className="form-control"
            style={{
                backgroundColor: (props.length)
              }}
        />
        

    </div>
)
     
};
export default Password;


// style={} onChange={ handleChange } value={}
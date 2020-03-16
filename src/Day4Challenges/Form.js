import React, { useState } from "react"

const Form = ({ handleUpdate }) => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

    const updateName = (e) => setName(e);

    const updateEmail = (e) => setEmail(e);

  const formSubmitted = e => {
    // prevent default
    // e.preventDefault();

    // pass all data up
    handleUpdate({ name: name, email: email });
};


return(
    <div>
        <label>Name</label>
        <input onChange={ (e)=>  updateName(e.target.value) } value={name} type="text" ></input>
        <label>Email</label>
        <input onChange={ (e)=>  updateEmail(e.target.value) } value={email} type="email" ></input>
        <button  className="btn btn-primary" onClick={ ()=> formSubmitted() }><strong>Submit</strong></button>
    </div>
)
     
};
export default Form;


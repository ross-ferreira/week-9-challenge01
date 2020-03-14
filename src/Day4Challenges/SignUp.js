import React, { useState, } from "react"
import Password from './Password';

const SignUp = (props) => {

const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");

const updatePassword = (value) => setPassword(value);
const updatePasswordConfirmation = (value) => setPasswordConfirmation(value);

const checkValid=()=> {
    return password === passwordConfirmation;
}

const colorSelector=()=> {
  if (password.length == 0){
      return 'white';
  } else if (password.length < props.minimumLength){
      return 'red';
  }
  return 'white';

}

const passwordMatch=() => {
  if(password.length>0){ 
    return checkValid()? "Passwords Match":"Passwords Dont Match";} 
      else {
        return "";}

}

  return (
      <>
      <p>{passwordMatch()}</p>
      <Password valid={ checkValid() } length={colorSelector()} value={password} minimumLength={props.minimumLength} name="Password"  onChange={updatePassword }/>
      <br></br>
      <Password valid={ checkValid() } length={colorSelector()} value={passwordConfirmation} minimumLength={props.minimumLength} name="Confirm Password"  onChange={updatePasswordConfirmation}/>
      <p className="form-text text-muted"> Min Length: { props.minimumLength } characters </p>
      </>
  )

}
export default SignUp;



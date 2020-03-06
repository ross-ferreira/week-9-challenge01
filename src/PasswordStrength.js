import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class Length extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" }; // add the value of the input to the state
        this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to // use the value property to read its current value 
    this.setState({ input: e.currentTarget.value });
    }

colorSelector() {
        if (this.state.input.length >16){
            return 'green';
        } else if (this.state.input.length >9){
            return 'orange';
        } else if (this.state.input.length >0){
            return 'red';
        }
        return 'white';
    
    }
    
  
    render() {
        const styles1= {
            backgroundColor:this.colorSelector(),
        }
    return (
        <div className="form-group">
            <label>{ this.props.label }</label>
            { /* use the value of the state */ }
            <input placeHolder="Enter Password" style={styles1} type="password" onChange={ this.handleChange } value={ this.state.input } name={ this.props.name } className="form-control"/>
            <p className="form-text text-muted"> Length: { this.state.input.length } characters </p>
        

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Length: { this.state.input.length } characters</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl style={styles1} type="password"  onChange={ this.handleChange } value={ this.state.input } placeHolder="Enter Password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div> );
} }
export default Length;

// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

// (this.state.counter % 2 === 0 ? color : 'pink')


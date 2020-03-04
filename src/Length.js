import React, { Component } from "react";


class Length extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "Input Something" }; // add the value of the input to the state
        this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to // use the value property to read its current value 
    this.setState({ input: e.currentTarget.value });
    }
    
  
    render() {
    return (
        <div className="form-group">
            <label>{ this.props.label }</label>
            { /* use the value of the state */ }
            <input onChange={ this.handleChange } value={ this.state.input } name={ this.props.name } className="form-control"/>
            <p className="form-text text-muted"> Length: { this.state.input.length } characters </p>
        </div> );
} }
export default Length;

// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.
import React, { Component } from "react";


class TempConverter extends Component {
    constructor(props) {
        super(props);
        this.state = { inputF: null, inputC: null }; // add the value of the input to the state
        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
}

handleChangeF(ef) {
    const newF= ef.currentTarget.value;
    this.setState({ inputF: newF, inputC: ((newF-32) *(5/9)).toFixed(1) });
    }

handleChangeC(ec) {
        const newC= ec.currentTarget.value; 
        this.setState({ inputC: newC, inputF: ((newC * 9/5) + 32).toFixed(1) });
        }
    
  
    render() {

    return (
        <div className="form-group">
            <label>{ this.props.label }</label>
    
            <input placeHolder="Enter °F" onChange={ this.handleChangeF } value={ this.state.inputF } name={ this.props.name } className="form-control"/>
            <input placeHolder="Output in °C" onChange={ this.handleChangeC } value={ this.state.inputC} name={ this.props.name } className="form-control"/>
        </div> );
} }
export default TempConverter;

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.
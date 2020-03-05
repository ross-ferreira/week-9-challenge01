import React, { Component } from "react";


class Transform extends Component {
    constructor(props) {
        super(props);
        this.state = { input: 0, output:0}; 
        this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
    this.setState({ input: e.currentTarget.value, output:this.props.transform(e.currentTarget.value)});
    }
   
  
render() {

    return (
        <div className="form-group">
            <input placeHolder="Enter Number to be Transformed" onChange={ this.handleChange } value={ this.state.value } name={ this.props.name } className="form-control"/>
            <p>{ this.state.output }</p>

        </div> );
} }
export default Transform;

// Create a <Transform transform={ /* ...your function here... */ }> component. It should accept a function that takes a number and returns a number (e.g. a squaring function x => x * x or an increment function x => x + 1). The component should have an <input type="number"> and a <p>. When the user types into the <input> the <p> should output the result of running the number through the transform function. Try adding a few <Transform> components to your app with a different function for each one.
import React, { Component } from "react";


class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = { input: 0, list:[], total:0}; // add the value of the input to the state
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
}

handleChange(e) {
    let current= this.state.input;
    this.setState({ input: e.currentTarget.value });
    }

handleClick() {

        this.setState({ list: this.state.list.concat(this.state.input) });
        this.setState({ total: this.state.list.reduce((total, val) => total + +val, 0) });
       }
       // added "+" infront of val as the input field brings in all data as a string, so the Number is coming in as a string number and not a  number causing concatation rather than addition when the array is reduced.
  
    render() {

    return (
        <div className="form-group">
            <ul>
                {this.state.list.map((item, index) => (
                    <li className="page-item" key={ index }>
                        {item} 
                    </li>
            ))}
            </ul>
            <br></br>
            <input placeHolder="Input Number" onChange={ this.handleChange } value={ this.state.value } name={ this.props.name } className="form-control"/>
            <p>Total:{this.state.total} </p>
            <button onClick={ this.handleClick }>Add</button>

        </div> );
} }
export default Adder;


// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6
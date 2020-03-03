import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class Dice extends Component {
     

    constructor(props) {
        super(props);
        this.state = { counter: 0, names: "Ross"}; 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
  
        let random = Math.random(); // a number between 0 and 1
        let number = Math.floor(random * this.props.sides +1 ); // a number between 0 and 99
        this.setState({ counter: number});
    }

    //this.state    states are local to the Component and can be changed
    //this.props    props are inherited from the parent and cannot be changed just used
     
       

    render() {


    return (
        <>
            <p>
            {this.state.counter}
            </p>
            <button onClick={ this.handleClick }>Roll</button> 
        </>
    );
    }
    }
export default Dice;

// Hint: Math.random() generates a random number between 0 and 1. If you multiply the result by, say 100, and then use Math.floor(), you will get a number between 0 and 99.

// let random = Math.random(); // a number between 0 and 1
// let number = Math.floor(random * 100); // a number between 0 and 99
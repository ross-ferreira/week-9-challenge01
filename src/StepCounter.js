import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class StepCounter extends Component {
     

    constructor(props) {
        super(props);
        this.state = { counter: 0,};
        this.handleClickPos = this.handleClickPos.bind(this);
        this.handleClickNeg = this.handleClickNeg.bind(this);
    }

    handleClickPos() {
        let current = this.state.counter;
        this.setState({ counter: current < this.props.max? current + this.props.step : this.props.max });
       }
       // I have used destructered this.props instead of setting a CONST as it is only needed once within handleClickPos
       

    handleClickNeg() {
        let current = this.state.counter;
        this.setState({ counter: current > 0? current - this.props.step : 0 });
       }

    render() {


    return (
        <>
            <p>
            {this.state.counter}
            </p>
            <button onClick={ this.handleClickPos }>+</button> 
            <button onClick={ this.handleClickNeg }>-</button>
        </>
    );
    }
    }
export default StepCounter;

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.
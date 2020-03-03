import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class RollCall  extends Component {


    constructor(props) {
        super(props);
        this.state = { counter: 0,};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.counter;
        this.setState({ counter: current<6 ? current + 1 : current * 0 });
       }


    render() {

    return (
        <>
            <p>
                {this.props.names[this.state.counter]}
            </p>
            <button onClick= { this.handleClick }>Next</button>
        </>
    );
    }
    }
export default RollCall;



// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.
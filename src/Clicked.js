import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class Clicked  extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0,};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.counter;
        this.setState({ counter: current + 1 });
       }

    render() {
    const {children} =this.props;

    return (
        <>
            {/* <p onClick={ this.handleClick }>this.state.counter{children}</p>
            <p >Clicked!!!!!</p> */}
            {this.state.counter %2 ==0 ? <p onClick={ this.handleClick }>Clicked!!!!</p> : <p onClick={ this.handleClick }>{children}</p>}
        </>
    );
    }
    }
export default Clicked;


// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".


import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class Counter extends Component {
     

    constructor(props) {
        super(props);
        this.state = { counter: this.props.initial,}; // I have used decompositioned this.props instead of setting a CONST as it is only needed once within the contructor
        this.handleClickPos = this.handleClickPos.bind(this);
        this.handleClickNeg = this.handleClickNeg.bind(this);
    }

    handleClickPos() {
        let current = this.state.counter;
        this.setState({ counter: current<this.props.max? current + 1 : this.props.max });
       }
       // I have used decompositioned this.props instead of setting a CONST as it is only needed once within handleClickPos
       

    handleClickNeg() {
        let current = this.state.counter;
        this.setState({ counter: current>0? current - 1: 0 });
       }

    render() {
        const styles1= {
            margin: '20px',
            width: '50px',
            height: '50px',
            backgroundColor: 'pink',
            display: 'block',
            textAlign:'center',
            padding: "10px 0px 0px 0px ",
          }
        
        const styles2= {
            width: '50px',
            height: '50px',
            backgroundColor: 'blue',
            display: 'inline-block',
            textAlign:'center',
            padding: "10px 10px 10px 10px ",
          }


    return (
        <>
            <p style={styles1} >
                <strong>{this.state.counter}</strong>
            </p>
            <button style={styles2} onClick={ this.handleClickPos }><strong>+</strong></button> 
            <button style={styles2} onClick={ this.handleClickNeg }><strong>-</strong></button>
        </>
    );
    }
    }
export default Counter;






// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.
import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class Colours  extends Component {

    constructor(props) {
        super(props); // <======= dont FORTGET me
        this.state = { counter: 0,};
        this.handleClick = this.handleClick.bind(this); // <======= dont FORTGET me
    }
    
      handleClick() {
        let current = this.state.counter;
        this.setState({ counter: current<(this.props.colours).length-1 ? current + 1 : current * 0 });
      }
      //Added ARRAY.LENGTH for the ternary argument 
    
     render() {
      const styles1= {
        margin: '20px',
        width: '200px',
        height: '200px',
        backgroundColor: this.props.colours[this.state.counter],
        display: 'inline-block',
      }
      return (
        <div style={styles1} onClick={ this.handleClick }></div>
      );
     }
    }
export default Colours;


// Create a <Colours colours={ colours }> component. 

// It should display a <div> that's 200px  by 200px. When you click on it, it should cycle background colour through the colours array that you pass in. Here are some nice colours:


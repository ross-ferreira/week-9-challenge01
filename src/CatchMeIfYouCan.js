import React, { Component } from "react";
// we use className to add classes for Bootstrap styling
 class CatchMeIfYouCan extends Component{
   
  constructor(props) {
    super(props); // <======= dont FORTGET me
    this.state = { counter: 0,};
    this.handleClick = this.handleClick.bind(this); // <======= dont FORTGET me
}

  handleClick() {
    let current = this.state.counter;
    this.setState({ counter: current + this.props.jump });
  }

 render() {
  const styles1= {
    margin: '20px',
    height: '50px',
    position: 'relative',
    top: this.state.counter,
  }
  return (
    <button style={styles1} onClick={ this.handleClick }>Bye Bye Bye</button>
  );
 }
}

export default CatchMeIfYouCan;

// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.
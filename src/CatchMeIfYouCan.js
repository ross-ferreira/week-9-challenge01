import React, { Component } from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';


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
  const styles2= {
    margin: '30px',
    height: '50px',
    position: 'relative',
    top: this.state.counter,
    left: this.state.counter,
  }
  return (
   <>
    <button style={styles1} onClick={ this.handleClick }>Bye Bye Bye</button>
    {/* //BELOW is the Pre-Built Components */}
    <ButtonToolbar>
      <Button variant="outline-primary" style={styles2} onClick={ this.handleClick }>Bye Bye Bye 2.0
      </Button>
    </ButtonToolbar>
    </>
  );
 }
}

export default CatchMeIfYouCan;

// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.
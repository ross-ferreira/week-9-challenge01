import React, { Component } from "react";
// we use className to add classes for Bootstrap styling
 class Square extends Component{
   
  constructor(props) {
    super(props); // <======= dont FORTGET me
    this.state = { counter: 0,};
    this.handleClick = this.handleClick.bind(this); // <======= dont FORTGET me
}

  handleClick() {
    let current = this.state.counter;
    this.setState({ counter: current + 1 });
  }

 render() {
  const {color} =this.props;
  const styles1= {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: (this.state.counter % 2 === 0 ? color : 'pink'),
    display: 'inline-block',
  }
  return (
    <div style={styles1} onClick={ this.handleClick }></div>
  );
 }
}

Square.defaultProps={
  color: "yellow"
}
export default Square;





import React, { Component } from "react";

// we use className to add classes for Bootstrap styling

 class LameGame extends Component {
     

    constructor(props) {
        super(props);
        this.state = { counter: 0, names: "Ross",timerOn: false, timerStart:0,timerTime: this.props.aim}; 
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickNow = this.handleClickNow.bind(this);
    }

    handleClickStart() {
  
        let current = this.state.counter
        this.setState({ counter: current +1});
        this.startTimer();
    }

    handleClickNow() {
  
        clearInterval(this.timer);
        this.setState({ timerOn: false })

    }

    startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Game Ended");
          }
        }, 10);
      };

    //this.state    states are local to the Component and can be changed
    //this.props    props are inherited from the parent and cannot be changed just used
     
       

    render() {


    return (
        <>
            <p>
            {this.state.timerTime/100} Seconds
            </p>
            <p>
            {this.state.counter >=1 ? <button onClick={ this.handleClickNow }>Now</button> :<button onClick={ this.handleClickStart }>Start</button>}  
            </p> 
        </>
    );
    }
    }
export default LameGame;

// Create a <LameGame aim={ x }> component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to aim seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.;

//https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2
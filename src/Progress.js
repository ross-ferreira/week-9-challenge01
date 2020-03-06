import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

// we use className to add classes for Bootstrap styling

 class Progress  extends Component {

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


    return (
        <>
            <ProgressBar now={this.state.counter} label={`${this.state.counter}Presses`}/>
            <ButtonToolbar>
                <Button variant="outline-primary" onClick={ this.handleClick }>More!
                </Button>
            </ButtonToolbar>
        </>
    );
    }
    }
export default Progress;


// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <Progress> component. It should have a progress bar and a "More!" button. The progress bar should start at 0. Each time the button is pressed it should move 10% further along until it reaches 100%. Once it reaches 100% the button should become disabled.
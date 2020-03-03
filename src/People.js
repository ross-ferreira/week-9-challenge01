import React, { Component } from "react";
// we use className to add classes for Bootstrap styling
 
class People extends Component {
    handleClick() {
        console.log("Hello Ross"); }

    render(){
        const {names} =this.props;

        return(
            names ? (<ul className="pagination" onClick={ this.handleClick }>
                { names.map((name, index) => (
                <li className="page-item" key={ index }>{name} </li>
                ))} </ul>) : <p>Nothing to see here</p>

);}
}
export default People;

// Update the <People> component so that when you click on the <ul> "Hello, world" gets logged in the JS console.

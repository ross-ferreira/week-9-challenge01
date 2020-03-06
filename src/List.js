import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';



class List extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "", list:[] }; // add the value of the input to the state
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
}

handleChange(e) {
    this.setState({ input: e.currentTarget.value });
    }

handleClick() {

        this.setState({ list: this.state.list.concat(this.state.input)});

       }   // we use the concat method as PUSH() outputs a length of the new array which then prevents MAP() below from working
  
    render() {

    return (
        <div className="form-group">
            <ul>
                {this.state.list.map((item, index) => (
                    <li className="page-item" key={ index }>
                        {item} 
                    </li>
            ))}
            </ul>
            <br></br>
            <input placeHolder="Input List Item" onChange={ this.handleChange } value={ this.state.value } name={ this.props.name } className="form-control"/>
            <button onClick={ this.handleClick }>Add</button>

            <ListGroup>
                {this.state.list.map((item, index) => (
                    <ListGroup.Item className="page-item" key={ index }>{item}</ListGroup.Item>
                ))}     
            </ListGroup>
            <FormControl onChange={ this.handleChange } value={ this.state.input } placeHolder="Input your Wishes" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button variant="outline-primary" onClick={ this.handleClick }>Add Me
            </Button>

        </div> );
} }
export default List;

// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.


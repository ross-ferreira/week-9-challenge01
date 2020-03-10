import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';
// make a GET request


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { email:"", comment:""}; 
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        // get the values of some controlled components
    let { email, comment } = this.state;
        // post data to an API
    api_axios_config.post(`/articles/${this.props.id}/comments`, { 
        email: email,
        comment: comment
        }).then(() => {
            this.setState({ email: "", comment: ""}); 
        });
    }

      
    render() {
       
        return (
        <>
            <Form>
                <Form.Group controlId="Form.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control as="textarea" rows="1" onChange={ ({ currentTarget: { value } }) => this.setState({ email: value }) } value={ this.state.email }/>
                </Form.Group>
                <Form.Group controlId="Form.ControlTextarea2">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="1" onChange={ ({ currentTarget: { value } }) => this.setState({ comment: value }) } value={ this.state.comment }/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={ this.handleSubmit }>Add Comment</Button>

        </> 
        );
} }
export default CreateComment;
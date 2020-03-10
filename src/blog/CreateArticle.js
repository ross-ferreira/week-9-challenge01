import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';
// make a GET request

const initialState = { title:"", article:"",tags:[] }; 

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = initialState; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 

    handleSubmit() {
        // get the values of some controlled components
        let { title, article,tags } = this.state;
            // post data to an API
        api_axios_config.post("/articles", { 
            title: title,
            article: article,
            tags: tags.split(',').map(s=>s.trim())
        }).then(() => {
                // once the server responds successfully, clear the inputs
            this.setState(initialState); 
        });
    }
 
    render() {
       
        return (
        <>
            <h2>Create Article</h2>

            <Form>
                <Form.Group controlId="Form.ControlTextarea1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ title: value }) } value={ this.state.title }/>
                </Form.Group>
                <Form.Group controlId="Form.ControlTextarea2">
                    <Form.Label>Article</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ article: value }) } value={ this.state.article }/>
                </Form.Group>
                <Form.Group controlId="Form.ControlTextarea3">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ tags: value }) } value={ this.state.tags }/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={ this.handleSubmit }>Create</Button>

        </> 
        );
} }
export default CreateArticle;
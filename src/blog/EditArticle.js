import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';



const initialState = { article:{ }}; 

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = initialState; 
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        // make the GET request
        api_axios_config.get("/articles/"+this.props.id).then(({ data }) => { // once the data has come back update the component state 
            // console.log(data);
            this.setState({
                loaded: true,
                article: {
                    ...data.data,
                    tags: data.data.tags.join(', '), // "...data.data" this means create a new object from data.data then replace tags: by turning it back into a string 
                }, 
            });
        }); 
    }

    handleSubmit() {
            // get the values of some controlled components
        let { title, article,tags } = this.state;
            // post data to an API
        api_axios_config.put(`/articles/${this.props.id}`, { 
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
            <pre>{ JSON.stringify(this.state, null, 4) }</pre>
            <Form>
                <Form.Group controlId="Form.ControlTextarea1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ article: { ...this.state.article, title: value } }) } value={ this.state.article.title }/>
                </Form.Group>
                <Form.Group controlId="Form.ControlTextarea2">
                    <Form.Label>Article</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ article: { ...this.state.article, article: value } }) } value={ this.state.article.article }/>
                </Form.Group>
                <Form.Group controlId="Form.ControlTextarea3">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ article: { ...this.state.article, tags: value } })} value={ this.state.article.tags }/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={ this.handleSubmit }>Update</Button>

        </> 
        );
} }
export default EditArticle;






// import React, { Component } from "react";
// import api_axios_config from "../api_axios_config";
// import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/Form';



// const initialState = { title:"", article:"",tags:[] }; 

// class EditArticle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = initialState; 
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     componentDidMount() {
//         // make the GET request
//         api_axios_config.get("/articles/"+this.props.id).then(({ data }) => { // once the data has come back update the component state 
//             console.log(data);
//             this.setState({
//                 loaded: true,
//                 articles: data.data 
//             });
//         }); 
//     }

//     handleSubmit() {
//             // get the values of some controlled components
//         let { title, article,tags } = this.state;
//             // post data to an API
//         api_axios_config.put(`/articles/${this.props.id}`, { 
//             title: title,
//             article: article,
//             tags: tags.split(',').map(s=>s.trim())
//         }).then(() => {
//                 // once the server responds successfully, clear the inputs
//             this.setState(initialState); 
//         });
//     }
      
//     render() {
       
//         return (
//         <>
//             <Form>
//                 <Form.Group controlId="Form.ControlTextarea1">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ title: value }) } value={ this.state.title }/>
//                 </Form.Group>
//                 <Form.Group controlId="Form.ControlTextarea2">
//                     <Form.Label>Article</Form.Label>
//                     <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ article: value }) } value={ this.state.article }/>
//                 </Form.Group>
//                 <Form.Group controlId="Form.ControlTextarea3">
//                     <Form.Label>Tags</Form.Label>
//                     <Form.Control as="textarea" rows="2" onChange={ ({ currentTarget: { value } }) => this.setState({ tags: value })} value={ this.state.tags }/>
//                 </Form.Group>
//             </Form>
//             <Button variant="primary" onClick={ this.handleSubmit }>Update</Button>

//         </> 
//         );
// } }
// export default EditArticle;
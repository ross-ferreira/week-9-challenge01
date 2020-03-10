import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import { Link } from "react-router-dom";
import Article from "./Article";
// make a GET request


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, comments: [],
        }; 

    }

      // runs when the component first renders
    componentDidMount() {
        // make the GET request
        api_axios_config.get(`/articles/${this.props.id}/comments`).then(({ data }) => { // once the data has come back update the component state 
            console.log(this.props.id);
            this.setState({
                loaded: true,
                comments: data.data 
            });
        }); 
    }
    // we use data as axios pulls through a data object so in orded to access the data within the object we use data.data 


  
    render() {
        let { comments, loaded } = this.state;

    return !loaded ? <p>Loading...</p> :(
        <>
            <h2>Comments</h2> 
            <ul className="list-group">
                { comments.map((comment,index) => ( 
                                  
                     <li key={index} className="list-group-item" >
                         <h2>{comment.email}</h2> <p> {comment.comment === null ? "No Comment":comment.comment} </p>
                    </li>
            )) } 
            </ul>
        </> 
        );
} }
export default Comments;
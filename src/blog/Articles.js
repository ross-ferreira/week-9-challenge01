import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import { Link } from "react-router-dom";
// make a GET request


class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, articles: [],
        }; 

    }

      // runs when the component first renders
    componentDidMount() {
        // make the GET request
        api_axios_config.get("/articles").then(({ data }) => { // once the data has come back update the component state 
            console.log(data);
            this.setState({
                loaded: true,
                articles: data.data 
            });
        }); 
    }
    // we use data as axios pulls through a data object so in orded to access the data within the object we use data.data 


  
    render() {
        let { articles, loaded } = this.state;

    return !loaded ? <p>Loading...</p> :(
        <>
            <h2>Articles</h2> 
            <ul className="list-group">
                { articles.map((article,index) => ( 
                                  
                     <li key={index} className="list-group-item" >
                         <Link to= {`/articles/${article.id }`}>{article.title}</Link> 
                    </li>
            )) } 
            </ul>
        </> 
        );
} }
export default Articles;
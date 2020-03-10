import React, { Component } from "react";
import api_axios_config from "../api_axios_config";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import EditArticle from "./EditArticle";
// make a GET request




class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, articles: [],
        }; 

    }

      // runs when the component first renders
    componentDidMount() {
        // make the GET request
        api_axios_config.get("/articles/"+this.props.id).then(({ data }) => { // once the data has come back update the component state 
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
                <li key={this.props.id} className="list-group-item" > 
                    <h2>{articles.title}</h2> 
                    <p>{articles.article}</p>
                </li>
            </ul>
            <p className="btn btn-primary">{articles.tags}</p>
            <EditArticle id={this.props.id}/>
            <Comments id={this.props.id}/>
            <CreateComment id={this.props.id}/>
        </> 
        );
} }
export default Article;
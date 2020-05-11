import React from 'react';
import { Form } from './Form';

class CreateStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            author: "",
            tags: "",
            content: "",
            editorContent: "",
        };
    }


    componentDidMount() {
        const {id} = this.props.match.params;
        if(id !== undefined){
            console.log("edit"+id);
            this.setState({
                title: "Post1",
                description: "This is a post to be edited",
                author: "mahesh",
                tags: "nepal blog",
                content: "<h1>Welcome</h1><p>Hello Bye!</p>"
            });
        }
        else{
            console.log("CREATE");
        }
        //fetch api data and update state data accordingly
    }


    handleSubmit = (event) => {
        // TODO: POST api call to add data
        //check this.props.location.pathname. If it contains edit then send PUT request, else send POST req.
        event.preventDefault();
        console.log('Submitted.');
        console.log(this.state);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditorChange = (html) => {
        console.log(html);
        this.setState({editorContent: html});
    }

    render(){
        console.log(this.state);
        return(
            <Form 
                handleSubmit={this.handleSubmit} 
                title={this.state.title}
                description={this.state.description}
                author={this.state.author}
                tags={this.state.tags}
                content={this.state.content}
                handleChange={this.handleChange}
                handleEditorChange={this.handleEditorChange}
                />
        );
    }
}

export { CreateStory };

import React from 'react';
import { Form } from './Form';

class CreateStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            author: "",
            tags: ""
        };
    }

    handleSubmit = (event) => {
        // TODO: POST api call to add data
        console.log('Submitted.');
        event.preventDefault();
    };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        });
    };

    handleTagsChange = (event) => {
        this.setState({
            tags: event.target.value
        });
    };

    render(){
        return(
            <Form 
                handleSubmit={this.handleSubmit} 
                title={this.state.title}
                handleTitleChange={this.handleTitleChange}
                description={this.state.description}
                handleDescriptionChange={this.handleDescriptionChange}
                author={this.state.author}
                handleAuthorChange={this.handleAuthorChange}
                tags={this.state.tags}
                handleTagsChange={this.handleTagsChange}
                />
        );
    }
}

export { CreateStory };

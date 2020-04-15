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
        event.preventDefault();
        console.log('Submitted.');
        console.log(this.state);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <Form 
                handleSubmit={this.handleSubmit} 
                title={this.state.title}
                description={this.state.description}
                author={this.state.author}
                tags={this.state.tags}
                handleChange={this.handleChange}
                />
        );
    }
}

export { CreateStory };

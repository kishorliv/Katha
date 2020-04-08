import React from 'react';
import { Form } from './Form';

class CreateStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ""
        };
    }

    handleSubmit = (event) => {
        console.log('Submitted.');
        event.preventDefault();
    };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    render(){
        return(
            <Form handleSubmit={this.handleSubmit} handleTitleChange={this.handleTitleChange} />
        );
    }
}

export { CreateStory };

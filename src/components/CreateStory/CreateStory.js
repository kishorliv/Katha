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


    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id);
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

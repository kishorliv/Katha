import React, { Fragment } from 'react';
import axios from 'axios';

import { Form } from './Form';
import { apiEndpoint } from '../../constants/urls';
import { AuthUserContext } from '../Session';


class CreateStoryBase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            tags: [],
            content: "",
            authId: "", //firebase auth id
            userId: "", // mongoose user schema id 
            error: null,
            loading: false
        };
    }


    componentDidMount() {
        this.setState({
            authId: this.props.authUser.uid
        });

        // const {id} = this.props.match.params;
        // if(id !== undefined){
        //     console.log("edit"+id);
        //     this.setState({
        //         title: "Post1",
        //         description: "This is a post to be edited",
        //         author: "mahesh",
        //         tags: "nepal blog",
        //         content: "<h1>Welcome</h1><p>Hello Bye!</p>"
        //     });
        // }
        // else{
        //     console.log("CREATE");
        // }
        //fetch api data and update state data accordingly
    }


    handleSubmit = (event) => {
        const { authId, userId, title, description, content, tags, loading } = this.state;

        this.setState({
            loading: true
        });

        // TODO: POST api call to add data
        //check this.props.location.pathname. If it contains edit then send PUT request, else send POST req.

        // get user by authId first to send userId in the request
        axios.get(apiEndpoint + '/users/authId/' + authId)
             .then((user) => {
                 console.log('Get user by authid response: ', user);
                 this.setState({
                     userId: user.data._id
                 });

                const postData = {
                    title: title,
                    description: description,
                    contentHtml: '<p>get this content from somewhere maybe localstorage</p>',
                    tags: ['google', 'people'],
                    userId: user.data._id
                }
                console.log(postData);
                axios.post(apiEndpoint + '/posts/create', postData)
                    .then(() => {
                        this.setState({
                            loading: false
                        });
                        console.log('Story posted successfully.');
                    })
                    .catch((error) => {
                        this.setState({
                            error: error,
                            loading: false
                        });
                        console.log('Post story error: ', error);
                    });

             })
             .catch((error) => {
                 this.setState({
                     error: error,
                     loading: false
                 });
                 console.log('Cannot fetch user by authId: ', error);
             });



        event.preventDefault();
        console.log('Submitted.')
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { loading, error, title, description, author, tags, content } = this.state;

        return(
            <Fragment>
                <Form 
                    handleSubmit={this.handleSubmit} 
                    title={title}
                    description={description}
                    tags={(tags)}
                    content={content}
                    handleChange={this.handleChange}
                    />
                {loading && <p>Loading...</p>}
                {error && <p>Sorry, could not create story.</p>}
            </Fragment>
        );
    }
}

const CreateStory = (props) => (
    <AuthUserContext.Consumer>
    {authUser => <CreateStoryBase {...props} authUser={authUser} />}
    </AuthUserContext.Consumer>
);

export { CreateStory };

  
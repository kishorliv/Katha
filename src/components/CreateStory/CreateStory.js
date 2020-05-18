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
            loading: false,
            edit: false,
            editPostId: null, // id of the post to be edited
        };
    }

    getContentFromEditor = (content) => {
        this.setState({content: content});
    };

    componentDidMount() {
        this.setState({
            authId: this.props.authUser.uid
        });


        console.log('this.props: ', this.props);
        const { title } = this.props.match.params;
        console.log('title before condition: ', title);
        
        if(title !== undefined && title !== null){
            this.setState({edit: true});
            console.log('inside get by title: ', title);
            // get post by title
            axios.get(apiEndpoint + '/posts/title/' + title)
                 .then((post) => {
                    console.log('Postyyyy: ', post);
                    this.setState({
                        title: post.data.title,
                        description: post.data.description,
                        tags: post.data.tags,
                        content: post.data.contentHtml,  
                        editPostId: post.data._id          
                    });

                    })
                 .catch((error) => console.log('Get post by title error: ', error));
        }
    }


    handleSubmit = (event) => {
        const { authId, userId, title, description, content, tags, loading } = this.state;

        this.setState({
            loading: true
        });

        // if edit is true, update the post otherwise create the post
        if(this.state.edit){
            // get user by authId first to send userId in the request
            axios.get(apiEndpoint + '/users/authId/' + authId)
            .then((user) => {
                console.log('Get user by authid response: ', user);
                this.setState({
                    userId: user.data._id
                });

                const updateData = {
                    title: this.state.title,
                    description: this.state.description,
                    content: this.state.content,
                    tags: this.state.tags,
                    userId: user.data._id
                }
                console.log('Data just before updating: ', updateData);

                const url = apiEndpoint + '/posts/' + this.state.editPostId + '/update';
                axios.patch(url, updateData)
                    .then((res) => {
                        this.setState({
                            loading: false
                        });
                        console.log('Story updated successfully.: ', res);
                    })
                    .catch((error) => {
                        this.setState({
                            loading: false,
                            error: error.response.data.message
                        });
                        console.log('Update story error: ', error.response.data.message);
                    });

            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.response.data.message
                });
                console.log('Cannot fetch user by authId error: ', error);
            });


        }
        else{
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
                        contentHtml: this.state.content,
                        tags: ['google', 'people'],
                        userId: user.data._id
                    }
                    console.log('Data just before posting: ', postData);
    
                    const url = apiEndpoint + '/posts/create';
                    axios.post(url, postData)
                        .then((res) => {
                            this.setState({
                                loading: false
                            });
                            console.log('Story posted successfully.: ', res);
                        })
                        .catch((error) => {
                            this.setState({
                                loading: false,
                                error: error.response.data.message
                            });
                            console.log('Post story error: ', error.response.data.message);
                        });
    
                 })
                 .catch((error) => {
                     this.setState({
                         loading: false,
                         error: error.response.data.message
                     });
                     console.log('Cannot fetch user by authId error: ', error);
                 });
        }

        event.preventDefault();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { loading, error, title, description, tags, content } = this.state;

        return(
            <Fragment>
                <Form 
                    handleSubmit={this.handleSubmit} 
                    title={title}
                    description={description}
                    tags={(tags)}
                    content={content}
                    handleChange={this.handleChange}
                    getContentFromEditor={this.getContentFromEditor}
                    />
                {loading && <p>Loading...</p>}
                {error && <p>Sorry, could not create story. Error: {error}</p>}
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

  
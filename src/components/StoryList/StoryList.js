import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import { Story } from './Story';
import { apiEndpoint } from '../../constants/urls';
import LogoImage from '../../assets/icons/logo.png';
import { AuthUserContext } from '../Session';



/**
 * Component that renders list of story cards.
 */

class StoryListBase extends React.Component{
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = {
            stories: [],
            imgs: [],
            error: null,
            loading: false,
            userId: null
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
      }
    
    componentDidMount(){
        this._isMounted = true;

        this.setState({ 
            loading: true,
        });
        
        const authId = this.props.authUser.uid;

        // get user by authId first to send userId in the request
        axios.get(apiEndpoint + '/users/authId/' + authId)
            .then((user) => {
                console.log('Get user by authid response: ', user);
                if (this._isMounted){
                    this.setState({
                        userId: user.data._id
                    });
                }
                // TODO: api call to fetch stories, might not need to fetch the whole html, just the required props
                axios.get(apiEndpoint + '/users/' + this.state.userId + '/posts')
                    .then((stories) => {
                        if (this._isMounted) {
                            this.setState({ 
                                stories: stories.data.posts,
                                imgs: [], // find one image from the post or return a default image
                                loading: false
                                });
                        }
                    })
                    .catch((error) => {
                        if (this._isMounted){
                            this.setState({ 
                                error: error,
                                loading: false
                                });
                        }
                        console.log('Fetch story error: ', error);
                    });
            })
            .catch((error) => {
                if (this._isMounted){
                    this.setState({ error: error });
                }
                console.log('Cannot fetch user by authId error: ', error);
            })
    }

    // gets title of the story when delete button is clicked
    handleSendTitle = ( title ) => {

        axios.delete(apiEndpoint + '/posts/' + title + '/delete')
             .then((res) => {
                 console.log('Post deleted.:  ', res.data.message);
                })
             .catch((error) => {
                if (this._isMounted){
                    this.setState({ error : error});
                }
                console.log('Cannot delete the post error: ', error);
             });
    }

    render(){
        const { error, stories, loading } = this.state;

        return(
            <div className="container">
                <div className="row">
                    { stories.map((story) => {
                        return(
                            <Story 
                                img={LogoImage} 
                                title={story.title} 
                                text={story.description} 
                                linkToRead={`/stories/${story.title}`} 
                                linkToEdit={`/edit/${story.title}`}
                                sendTitle={this.handleSendTitle}
                                key={story.title} 
                            />
                        );
                    })}
                    {loading && <p>Loading...</p>}
                    {error && <p>Sorry, could not fetch stories.</p>}
                </div>
            </div>
        );
    }
}

const StoryList = (props) => (
    <AuthUserContext.Consumer>
    {authUser => <StoryListBase {...props} authUser={authUser} />}
    </AuthUserContext.Consumer>
);

export { StoryList };

import React from 'react';
import axios from 'axios';

import { Story } from './Story';
import { apiEndpoint } from '../../constants/urls';
import LogoImage from '../../assets/icons/logo.png';


/**
 * Component that renders list of story cards.
 */

class StoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stories: [],
            imgs: [],
            error: null,
            loading: false
        };
    }
    
    componentDidMount(){
        this.setState({ loading: true})
        // TODO: api call to fetch stories, might not need to fetch the whole html, just the required props
        axios.get(apiEndpoint + '/posts/')
             .then((stories) => {
                 console.log(stories);
                 this.setState({ 
                     stories: stories.data,
                     imgs: [], // find one image from the post or return a default image
                     loading: false
                    });
             })
             .catch((error) => {
                 this.setState({ error: error});
                 console.log('Fetch story error: ', error);
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
                                linkToEdit={`/stories/${story.title}`}
                                linkToDelete={`/stories/${story.title}`}
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

export { StoryList };

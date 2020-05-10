import React, { Fragment} from 'react';
import axios from 'axios';

import { Preview } from './Preview';
import { apiEndpoint } from '../../constants/urls';


/**
 * This component fetches html from server and passes it in Preview component.
 */
class StoryPreviewArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            htmlString: '',
            loading: false,
            error: null
        };
    }

    componentDidMount(){
        const title = this.props.match.params.title;

        this.setState({ 
            loading: true 
        });

        axios.get(apiEndpoint + '/posts/title/' + title)
             .then((story) => {
                 console.log(story);
                 this.setState({ 
                     htmlString: story.data.contentHtml,
                     loading: false
                    });
             })
             .catch((error) => {
                 this.setState({ 
                     error: error,
                     loading: false
                 });
                 console.log('Fetch story by title error: ', error);
             });
    }

    render(){
        const { htmlString, loading, error } = this.state;

        return(
            <Fragment>
                <Preview htmlString={htmlString} />
                {loading && <p>Loading...</p>}
                {error && <p>Sorry, could not fetch stories.</p>}
            </Fragment>
        );
    }
};

export default StoryPreviewArea;

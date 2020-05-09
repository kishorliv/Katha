import React, { Fragment} from 'react';

import { Preview } from './Preview';


/**
 * This component fetches html from server and passes it in Preview component.
 */
class StoryPreviewArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            htmlString: ''
        };
    }

    componentDidMount(){
        const title = this.props.match.params.title;
        // TODO: api call to get content or htmlstring based on the title
        // ....
        const htmlString = `<h1>Title: ${title}</h2><u>I am the story. You read.</u>`
        // ....

        this.setState({
            title: title,
            htmlString: htmlString
        });
    }

    render(){
        return(
            <Fragment>
                <Preview htmlString={this.state.htmlString} />
            </Fragment>
        );
    }
};

export default StoryPreviewArea;

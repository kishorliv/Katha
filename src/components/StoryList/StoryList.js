import React from 'react';

import { Story } from './Story';
import LogoImage from '../../assets/icons/logo.png';


const stories = [
    {
        "title": "this is a title",
        "text": "lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "comeon",
        "text": "lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "this is a dtitle",
        "text": "lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "my titled",
        "text": "lorem ipsum dolor is this dolor emet amet corona oh my lorem"
    },
];

/**
 * Component that renders list of story cards.
 */

class StoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            linkTo: [],
            stories: [],
            imgs: []
        };
    }

    componentDidMount(){
        // TODO: api call to fetch stories, might not need to fetch the whole html, just the props
        // then the content can be fetched by sending GET to getPostByTitle method maybe, each title is unique
        this.state.stories = []; //fill this
        this.state.linkTo = this.state.stories.map((story) => `/stories/${story.title}`);
        this.state.imgs = this.state.stories.map((story) => null); // find one image from the post or return a default image
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {/* { this.state.stories.map((story, i) => 
                        <Story 
                            img={this.state.imgs[i]} 
                            title={story.title} 
                            text={story.text} 
                            linkTo={this.state.stories[i]} 
                            key={stories.title} 
                        />
                    )} */}
                    { stories.map((story, i) => 
                        <Story 
                            img={LogoImage} 
                            title={story.title} 
                            text={story.text} 
                            linkTo={`/stories/${story.title}`} 
                            key={story.title} 
                        />
                    )}
                </div>
            </div>
        );
    }
}

export { StoryList };

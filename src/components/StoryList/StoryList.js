import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { Story } from './Story';

const stories = [
    {
        "title": "this is a title",
        "text": "lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "my title",
        "text": "lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "this is a title",
        "text": "lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "my title",
        "text": "lorem ipsum dolor is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "this is a title",
        "text": "lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem"
    },
    {
        "title": "my title",
        "text": "lorem ipsum dolor is this dolor emet amet corona oh my lorem"
    },
];

class StoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <CardColumns>
                {stories.map((story) => {
                    return(
                        <Story title={story.title} text={story.text} />
                    );
                })}
            </CardColumns>
        );
    }
}

export { StoryList };

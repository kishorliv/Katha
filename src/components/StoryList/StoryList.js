import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { Story } from './Story';

const stories = [
    {
        "title": "this is fa title",
        "contentHtml": "<p>lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem</p>"
    },
    {
        "title": "my titdfle",
        "contentHtml": "<u>lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem lorem ipsum dolor is this dolor emet amet corona oh my lorem</u>"
    },
    {
        "title": "this is a dtitle",
        "contentHtml": "<p>lorem ipsum dolor amet what the fudge is this dolor emet amet corona oh my lorem</p>"
    },
    {
        "title": "my titled",
        "contentHtml": "<b>lorem ipsum dolor is this dolor emet amet corona oh my lorem</b>"
    },
];

class StoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        // TODO: api call to fetch stories
    }

    render(){
        return(
            <CardColumns>
                {stories.map((story) => {
                    return(
                        <Story title={story.title} contentHtml={story.contentHtml} key={story.title}/>
                    );
                })}
            </CardColumns>
        );
    }
}

export { StoryList };

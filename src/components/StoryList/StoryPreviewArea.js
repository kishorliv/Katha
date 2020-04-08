// import React from 'react';
// import { renderMarkup } from '../../utils/utils';

// const StoryPreviewArea = ({ htmlString }) => {
//     return(
//         <div>
//             <p>Content preview</p>
//             {renderMarkup(htmlString)}
//         </div>
//     );
// };

// export { StoryPreviewArea };

import React from 'react';
import { renderMarkup } from '../../utils/utils';

class StoryPreviewArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            htmlString: ''
        };
    }

    componentDidMount(){
        const {title} = this.props.match.params;
        // TODO: api call to get content or htmlstring based on the title
        // ....
        const htmlString = `<u>I am the story. You read.</u>`
        // ....

        this.setState({
            title: title,
            htmlString: htmlString
        });
    }

    render(){
        return(
            <div>
                <p>Content preview</p>
                {console.log('Proppy: ', this.props)}
                {console.log('State: ', this.state)}
                {renderMarkup(this.state.htmlString)}
            </div>
        );
    }
};

export { StoryPreviewArea };

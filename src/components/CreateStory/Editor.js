import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '../../../lib/build/ckeditor'; // path to ckeditor custom build
import { renderMarkup } from '../../utils/utils'; 
import { StoryPreviewArea } from '../StoryList';

const Preview = ({ htmlString }) => {
    return(
        <div>
            <p>Content preview</p>
            {renderMarkup(htmlString)}
        </div>
    );
};

class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            html: ``,
        };
    }

    render(){
        return(
            <div>
                <div>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Start pouring!</p>"
                        onInit={ editor => {
                            console.log('editor initialized.');  
                        } }
                        onChange={ ( event, editor ) => {
                            this.setState({html: editor.getData()});
                        } }
                    />
                </div>
                <div>
                    {/* {renderMarkup(this.state.html)} */}
                    <Preview htmlString={this.state.html} />
                    {console.log(this.state.html)}
                </div>
            </div>
        );
    }
};

export { Editor };
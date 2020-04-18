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

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log("EDITOR RECEIVED " + nextProps);
        if(nextProps.content){
            this.setState({html: nextProps.content});
            // this.forceUpdate();
        }
        
    }


    render(){
        return(
            <div className='row'>
                <div className='col-md-8'>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
                        onInit={ editor => {
                            {this.state.html ? editor.setData(this.state.html) : editor.setData("<p>Pour your feelings here</p>")};
                            console.log('editor initialized.');  
                        } }
                        onChange={ ( event, editor ) => {
                             this.setState({html: editor.getData()}); 
                        } }
                    />
                </div>
                <div className='col-md-4'></div>
                <div>
                    {/* {renderMarkup(this.state.html)} */}
                    <Preview htmlString={this.state.html} />
                    {/* {console.log(this.state.html)} */}
                </div>
            </div>
        );
    }
};

export { Editor };
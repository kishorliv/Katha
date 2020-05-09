import React, { Fragment } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Preview } from '../StoryPreviewArea';
import './style.css';


/**
 * Quill editor component
 * Takes a prop: placeholder
 */
class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      editorHtml: '', 
      theme: 'snow' 
    }
  }

  // TODO: Dont use this later!
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.content){
        this.setState({editorHtml: nextProps.content});
    }
    
}
  
  handleChange = (html) =>  {
      this.setState({ editorHtml: html });
  }
  
  render () {
    return (
        <Fragment>
            <div>
                <ReactQuill 
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    placeholder={this.props.placeholder}
                />
            </div>
            <div>
                <Preview htmlString={this.state.editorHtml} />
            </div>
        </Fragment>
     )
  }
}

Editor.modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block', 'link'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['formula', 'image', 'video'],                    // embeds
    ['clean']                                         // remove formatting button
  ],

}

Editor.formats = [
  'bold', 'italic', 'underline', 'strike', 
  'blockquote', 'code-block', 'link',
  'header',
  'list',
  'script',
  'indent',
  'direction',
  'size',
  'header',
  'color',
  'background',
  'font', 
  'align',
  'formula',
  'image',
]

export { Editor };

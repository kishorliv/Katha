import React, { Fragment } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './style.css';
import { Preview } from '../StoryPreviewArea';


/**
 * Quill editor component
 * Takes a prop: placeholder
 */
class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      editorHtml: '', 
      theme: 'snow',
    }
  }

  // TODO: Dont use this later!
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.content){
        this.setState({
          editorHtml: nextProps.content
        });
    }
}
  
  handleChange = (html) =>  {
      this.setState({ editorHtml: html });
      this.props.getContentFromEditor(this.state.editorHtml);
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
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'align': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    ['blockquote', 'code-block', 'link'],
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

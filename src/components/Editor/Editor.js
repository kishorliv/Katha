import React, { Fragment } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Preview } from '../StoryPreviewArea';
import './style.scss';


const resetTimeout = (id, newID) => {	
	clearTimeout(id)
	return newID	
}

const SaveMessage = ({visible}) => 
  <div className={'saved' + (visible ? ' saved-visible' : '')}><p>Saved Successfully</p></div>


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
      saved: false,
      timeout: null
    }
  }

  // TODO: Dont use this later!
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.content){
        this.setState({editorHtml: nextProps.content});
    }
    
}
  
  handleChange = (html) =>  {
    //on every edit clear previous timeout and set new one for 5s
    this.setState({ 
      editorHtml: html,
      timeout: resetTimeout(this.state.timeout, setTimeout(this.saveValue, 5000))
    });
  }

	
	saveValue = () => {		
    localStorage.setItem('content', this.state.editorHtml);
    this.setState({...this.state, saved: true});
    //show saveMessage component for 1 sec
		setTimeout(() => this.setState({...this.state, saved: false}), 1000)		
	};
	


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
            <SaveMessage visible={this.state.saved} />
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

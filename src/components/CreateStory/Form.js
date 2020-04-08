import React from 'react';
import { Editor } from './Editor';


const Form = ({ handleSubmit, title, handleTitleChange }) => {

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input type="text" value={title} onChange={handleTitleChange} />
                <br /><br />
                <label>Write</label>
                <div className="ckeditor">
                    <Editor />
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export { Form };

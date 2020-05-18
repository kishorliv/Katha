import React from 'react';
import { Editor } from '../Editor';


const Form = ({ 
                handleSubmit,
                title, 
                description,
                tags,
                content,
                handleChange,
                getContentFromEditor
}) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input type="text" name='title' value={title} onChange={handleChange} required />
                <br /><br />
                <label>Description</label>
                <br />
                <input type="text" name='description' value={description} onChange={handleChange} required />
                <br /><br />
                <label>Write</label>
                <div>
                    <Editor content={content} getContentFromEditor={getContentFromEditor} placeholder={'Start writing here...'} />
                </div>
                <br /><br />
                <label>Tags</label>
                <br />
                <input type="text" name='tags' value={tags} onChange={handleChange} required />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export { Form };

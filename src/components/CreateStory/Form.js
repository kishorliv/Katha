import React from 'react';
import { Editor } from '../Editor';


const Form = ({ 
                handleSubmit,
                title, 
                description,
                author,
                tags,
                handleChange 
}) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input type="text" name='title' value={title} onChange={handleChange} />
                <br /><br />
                <label>Description</label>
                <br />
                <input type="text" name='description' value={description} onChange={handleChange} />
                <br /><br />
                <label>Author</label>
                <br />
                <input type="text" name='author' value={author} onChange={handleChange} />
                <br /><br />
                <label>Write</label>
                <div className="ckeditor">
                    <Editor />
                </div>
                <br /><br />
                <label>Tags</label>
                <br />
                <input type="text" name='tags' value={tags} onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export { Form };

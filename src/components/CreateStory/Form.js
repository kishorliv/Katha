import React from 'react';
import { Editor } from '../Editor';


const Form = ({ 
                handleSubmit,
                title, 
                description,
                author,
                tags,
                content,
                handleChange,
                handleEditorChange
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
                <div>
                    <Editor handleEditorChange={handleEditorChange} content={content} placeholder={'Start writing here...'}/>
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

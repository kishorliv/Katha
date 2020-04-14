import React from 'react';
import { Editor } from '../Editor';


const Form = ({ 
                handleSubmit,
                title, 
                handleTitleChange,
                description,
                handleDescriptionChange,
                author,
                handleAuthorChange,
                tags,
                handleTagsChange 
}) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input type="text" value={title} onChange={handleTitleChange} />
                <br /><br />
                <label>Description</label>
                <br />
                <input type="text" value={description} onChange={handleDescriptionChange} />
                <br /><br />
                <label>Author</label>
                <br />
                <input type="text" value={author} onChange={handleAuthorChange} />
                <br /><br />
                <label>Write</label>
                <div className="ckeditor">
                    <Editor />
                </div>
                <br /><br />
                <label>Tags</label>
                <br />
                <input type="text" value={tags} onChange={handleTagsChange} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export { Form };

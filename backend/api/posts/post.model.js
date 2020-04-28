const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String,
        trim: true,
        minLength: 3,
        required: [true, 'Title is required(Min. 3 chars).']
    },
    description: {
        type: String,
        trim: true,
        minLength: 3,
        required: [true, 'Description is required(Min. 3 chars).']
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    contentHtml: {
        type: String,
        minLength: 1,
        required: [true, 'Content is required(Min. 1 char).']
    },
    tags: [String]
},
{
    timestamps: true
});

module.exports = mongoose.model('Post', Post);

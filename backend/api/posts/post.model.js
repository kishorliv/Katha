const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    postDate: {type: Date, default: Date.now},
    title: String,
    author: String,
    content: String,
    tags: [String]
});

module.exports = mongoose.model('Post', Post);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullName: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 50,
        validate: {
            validator: function(v){
                return /^[a-zA-Z].*[\s\.]*$/.test(v);
            },
            message: 'Invalid name.'
        },
        required: [true, 'Full name is required(3-50 chars).']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Invalid email.'
        },
        required: [true, 'Email is required.']
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
});

module.exports = mongoose.model('User', User);
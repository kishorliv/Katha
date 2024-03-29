const Post = require('./post.model');
const User = require('../users/user.model');

module.exports = {
    create,
    getAll,
    getById,
    getByTitle,
    updatePost,
    deletePost
};

// TODO: sometimes this function is taking more time than usual, test it properly
// Assumption: userId field(user's document id) is sent in req.body
async function create(postData){
    if(await Post.findOne({title: postData.title})){
        throw 'Post with same title already exists!';
    }
    // find the actual user(user id is sent in req.body)
    const user = await User.findById(postData.userId);
    if(user === null || user === undefined) {
        throw 'Cannot find user with given user id while creating the post!';
    }  

    // create new post
    const newPost = postData;
    delete newPost.userId;

    const post = new Post(newPost);
    post.user = user;
    await post.save();

    // add post to user
    user.posts.push(post);
    await user.save();

    return post;
}

async function getAll(){
    return await Post.find();
}

async function getById(id){
    return await Post.findById(id).populate('user');
}

async function getByTitle(title){
    const post = await Post.findOne({title: title});
    if(post){
        return post;
    }else{
        throw 'Post with the given title cannot be fetched!';
    }
}

async function updatePost(id, postData){
    return await Post.findByIdAndUpdate(
        id, 
        {$set: {...postData}},
        {new: true},
        (err, post) => {
            if(err) throw 'Could not update user with id: ' + id;
        }
    );
}

async function deletePost(title){
    return await Post.findOneAndRemove({ title: title }, (err) => {
        if (err) throw 'Could not delete the post with title: ' + title;
    });
}

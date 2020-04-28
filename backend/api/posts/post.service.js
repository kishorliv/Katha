const Post = require('./post.model');
const User = require('../users/user.model');

module.exports = {
    create,
    getAll,
    getById,
    getByTitle,
    updatePost
};

// TODO: sometimes this function is taking more time than usual, test it properly
// Assumption: userId field(user's document id) is sent in req.body
async function create(postData){
    if(await Post.findOne({title: postData.title})){
        throw new Error('Post with same title already exists!');
    }
    // find the actual user(user id is sent in req.body)
    const user = await User.findById(postData.userId); // TODO: what to do if user is null, send null itself or ...?

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
        console.log('post: ', post);
        return post;
    }else{
        throw new Error('Post with the given title cannot be fetched!');
    }
}

async function updatePost(id, postData){
    return await Post.findByIdAndUpdate(
        id, 
        {$set: {...postData}},
        {new: true},
        (err, post) => {
            if(err) throw new Error('Could not update user with id: ', id);
        }
    );
}

const Post = require('./post.model');

module.exports = {
    add,
    getAll,
    getById,
    getByTitle
};

async function add(postData){
    if(await Post.findOne({title: postData.title})){
        throw new Error('Post with same title already exists!');
    }
    const post = new Post(postData);
    await post.save();

    return post;
}

async function getAll(){
    return await Post.find();
}

async function getById(id){
    return await Post.findById(id);
}

async function getByTitle(title){
    // const response = await getAll();
    // console.log(response);
    const post = await Post.findOne({title: title});
    //const post = response[2];
    if(post){
        console.log('post: ', post);
        return post;
    }else{
        throw new Error('Post with the given title cannot be fetched!');
    }
}

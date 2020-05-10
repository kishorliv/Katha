const User = require('./user.model');

module.exports = {
    create,
    getAll,
    getById,
    getByAuthId,
    getUserPosts,
    updateUser
};

async function create(userData){
    if(await User.findOne({email: userData.email})){
        throw new Error('User with same email already exists!');
    }
    const user = new User(userData);
    await user.save();

    return user;
}

async function getAll(){
    return await User.find();
}

async function getById(id){
    return await User.findById(id).populate('posts');
}

// returns user by authId(firebase)
async function getByAuthId(authId){
    return await User.findOne({ authId: authId});
}

async function getUserPosts(id){
    return await User.findById(id).select('posts').populate('posts');
}

async function updateUser(id, userData){
    return await User.findByIdAndUpdate(
        id, 
        {$set: {...userData}},
        {new: true},
        (err, user) => {
            if(err) throw new Error('Could not update user with id: ', id);
        }
    );
}

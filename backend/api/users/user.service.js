const User = require('./user.model');

module.exports = {
    add,
    getAll,
    getById,
};

async function add(userData){
    if(await User.findOne({email: userData.email})){
        throw new Error('User with same email already exists!');
    }
    const user = new User(userData);
    await user.save();

    return user;
}

async function getAll(){
    return await User.find().populate('posts').exec((err, user) => {
        if(err) throw new Error('Populating posts failed. Error: ', err);
        console.log('Populating posts successful: ', user);
    });
}

async function getById(id){
    return await User.findById(id);
}

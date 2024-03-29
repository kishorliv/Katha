const express = require('express');
const router = express.Router();

const userService = require('./user.service');

// routes
router.get('/', getAll);
router.get('/:userId', getById);
router.get('/authId/:authId', getByAuthId);
router.post('/create', create);
router.get('/:userId/posts', getUserPosts);
router.patch('/:userId/update', updateUser);

module.exports = router;


function getAll(req, res, next){
    userService.getAll()
    .then(users => res.send(users))
    .catch(err => next(err));
}

function getById(req, res, next){
    userService.getById(req.params.userId)
    .then(user => user ? res.send(user) : res.status(404).send({message: 'User not found!'}))
    .catch(err => next(err));  
}

function getByAuthId(req, res, next){
    userService.getByAuthId(req.params.authId)
    .then(user => user ? res.send(user) : res.status(404).send({message: 'User not found!'}))
    .catch(err => next(err));  
}

function create(req, res, next){
    userService.create(req.body)
    .then(user => user ? res.status(201).send(user) : res.status(400).send({message: 'User cannot be created!'}))
    .catch(err => next(err));
}

function getUserPosts(req, res, next){
    userService.getUserPosts(req.params.userId)
    .then(posts => posts ? res.send(posts) : res.status(404).send({message: 'Could not get user posts!'}))
    .catch(err => next(err));
}

function updateUser(req, res, next){
    userService.updateUser(req.params.userId, req.body)
    .then((user) => user ? res.status(200).send(user) : res.status(400).send({message: 'User cannot be updated!'}))
    .catch((err) => next(err));
}

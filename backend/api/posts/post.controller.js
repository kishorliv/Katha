const express = require('express');
const router = express.Router();

const postService = require('./post.service');

// routes
router.get('/', getAll);
router.get('/:postId', getById);
router.get('/title/:title', getByTitle);
router.post('/create', create);
router.patch('/:postId/update', updatePost);

module.exports = router;


function getAll(req, res, next){
    postService.getAll()
    .then(posts => res.send(posts))
    .catch(err => next(err));
}

function getById(req, res, next){
    postService.getById(req.params.postId)
    .then(post => post ? res.send(post) : res.status(404).send({message: 'Post not found!'}))
    .catch(err => next(err));  
}

function getByTitle(req, res, next){
    console.log('title: ', req.params.title);
    postService.getByTitle(req.params.title)
    .then(post => post ? res.send(post) : res.status(404).send({message: 'Post not found!'}))
    .catch(err => next(err));  
}

function create(req, res, next){
    postService.create(req.body)
    .then(post => post ? res.status(201).send(post) : res.status(400).send({message: 'Post cannot be created!'}))
    .catch(err => next(err));
}

function updatePost(req, res, next){
    postService.updatePost(req.params.postId, req.body)
    .then((post) => post ? res.status(200).send(post) : res.status(400).send({message: 'Post cannot be updated!'}))
    .catch((err) => next(err));
}

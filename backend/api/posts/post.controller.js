const express = require('express');
const router = express.Router();

const postService = require('./post.service');
const postSchemaValidator = require('../../_middlewares/schema-validator');
const postSchema = require('../../api/posts/post.validator');

// routes
router.get('/getAll', getAll);
router.get('/:id', getById);
router.get('/title/:title', getByTitle);
router.post('/add', postSchemaValidator(postSchema), add);

module.exports = router;


function getAll(req, res, next){
    postService.getAll()
    .then(posts => res.send({posts}))
    .catch(err => next(err));
}

function getById(req, res, next){
    postService.getById(req.params.id)
    .then(post => post ? res.send({post}) : res.status(404).send({message: 'Post not found!'}))
    .catch(err => next(err));  
}

function getByTitle(req, res, next){
    console.log('title: ', req.params.title);
    postService.getByTitle(req.params.title)
    .then(post => post ? res.send({post}) : res.status(404).send({message: 'Post not found!'}))
    .catch(err => next(err));  
}

function add(req, res, next){
    postService.add(req.body)
    .then(post => post ? res.status(201).send(post) : res.status(400).send({message: 'Post cannot be created!'}))
    .catch(err => next(err));
}

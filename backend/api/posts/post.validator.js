const Joi = require('@hapi/joi');

const postSchema = Joi.object({
    postDate: Joi.string().max(100).required(),
    title: Joi.string().min(5).max(500).required(),
    author: Joi.string().min(3).max(20).required(),
    content: Joi.string().min(5).required(),
    tags: Joi.array().items(Joi.string().min(2).max(25)).min(1).max(10).required()
});

module.exports = postSchema;

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const globalErrorHandler = require('./_middlewares/error-handler');
const postRoutes = require('./api/posts/post.controller');
require('./_db/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// api routes
app.use('/posts', postRoutes);

// global error handler
app.use(globalErrorHandler);

module.exports = app; 

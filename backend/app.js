require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const globalErrorHandler = require('./_middlewares/error-handler');
const postRoutes = require('./api/posts/post.controller');
const userRoutes = require('./api/users/user.controller');
require('./_db/db');

// setting maximum size of a request to 30mb
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.use(cors()); // TODO: don't use cors in production, run api and frontend in the same server


// api routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// global error handler
app.use(globalErrorHandler);

module.exports = app; 

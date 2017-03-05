'use strict';
var express = require('express');
// var jwt     = require('jsonwebtoken');
var config  = require('../../../config');
// 

// create a new Router
var apiRouter = express.Router();

// test route to make sure everything is working 
apiRouter.get('/', function(req, res) {
  res.json({
    message: 'Welcome to our API.'
  }); 
});


// set subroutes on the other files
apiRouter.use('/programs', require('./programs'));
apiRouter.use('/courses', require('./courses'));
apiRouter.use('/files', require('./files'));
apiRouter.use('/resources', require('./resources'));
apiRouter.use('/upload', require('./upload'));


module.exports = apiRouter;

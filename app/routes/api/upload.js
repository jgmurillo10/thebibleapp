'use strict';
var aws 		= require('aws-sdk');
var S3_BUCKET	= process.env.S3_BUCKET_NAME || 'thebibleapp';
var express = require('express');
var router = express.Router();
var Course = require('./../../models/course');
var File = require('./../../models/file');
var Resource = require('./../../models/resource')
var mongoose = require('mongoose');

// on routes that end in /courses
// ----------------------------------------------------

router.route('/')

  // get all programs
  .get(function(req, res) {  
     
     
  })
  .post(function(req, res){
  	// res.json(req.params.url);
  	console.log(req.body.username);
  	console.log(req.body.fullname);
  	console.log(req.body.fileurl);
  	console.log(req.body.name);
  	res.json({'ome':'gonorrea'});

  })

module.exports = router;
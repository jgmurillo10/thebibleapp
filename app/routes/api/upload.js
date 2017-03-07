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
  .post(function (req,res) {
    var file = new File();
    file._id= mongoose.Types.ObjectId();
    file.drive_url = req.body.fileurl;
    file.name= req.body.name;
    file.course_id = mongoose.Types.ObjectId(req.body.courseid);
    var size=req.body.filesize;
    size=size/1024000;
    size=size+ ' MB';
    file.size = size;
    console.log(file.name, file.drive_url, file._id, file.course_id, file.size);
    
    file.save(function(err) {
            if (err){
              //duplicate etry
              if(err.code == 11000)
                return res.json({success: false, message:'A file with that name or description already exists'});
              else
                return res.send(err);
            }
            res.json({ message: 'File created!' });
        });
  })
  // .post(function(req, res){

  // 	console.log(req.body.username);
  // 	console.log(req.body.fullname);
  // 	console.log(req.body.courseid);
// Seria bueno limpiar el código que ya no esten utilizando y no dejarlo comentado para mayor organizacion y entendimiento del codigo
  // 	res.json({'ome':'gonorrea'});


  // })

module.exports = router;

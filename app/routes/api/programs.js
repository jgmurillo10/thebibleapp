'use strict';
var express = require('express');
var router = express.Router();
var Program = require('./../../models/program');
var Course = require('./../../models/course');
var File = require('./../../models/file');
var Resource = require('./../../models/resource')
var mongoose = require('mongoose');
// on routes that end in /programs
// ----------------------------------------------------
router.route('/')

  // get all programs
  .get(function(req, res) {
    var query = Program.find();
      // query.select('program_id description url name');
      query.exec(function(err, programs){
        if(err) res.send(err);
        res.json(programs);
      })
     
     
  })

  // create new program
  .post(function (req,res) {
    var program = new Program();
    program._id= mongoose.Types.ObjectId();
    program.description=req.body.description;
    program.url = req.body.url;
    program.name= req.body.name;
    
    program.save(function(err) {
            if (err){
              //duplicate etry
              if(err.code == 11000)
                return res.json({success: false, message:'A program with that name or description already exists'});
              else
                return res.send(err);
            }
            res.json({ message: 'Program created!' });
        });
  })
  // delete a program
  
router.route('/:program_id')

  // get region by id
  .get(function(req, res) {
    var query = Program.find({_id: req.params.program_id});
     query.select('program_id description url name');
        query.exec(function(err, programs){
          if(err) res.send(err);
          res.json(programs);
        })

  })


  // courses in programs
  router.route('/:program_id/courses')

  // get fields by  region
  .get(function(req, res) {
       // var query = Course.find({});
       var query = Course.find({program_id: req.params.program_id});
       // query.select('courses');

       // query.select('url description course_id code name')
          query.exec(function(err, courses){
            if(err) res.send(err);
            res.json(courses);
          })
  })
  router.route('/:program_id/courses/:course_id')
  .get(function(req,res){
       var query = Course.find({_id: req.params.course_id});
           query.exec(function(err, courses){
            if(err) res.send(err);
            res.json(courses);
          })
  })
  router.route('/:program_id/courses/:course_id/files')

  .get(function(req, res) {
    var query = File.find({course_id: req.params.course_id});
           query.exec(function(err, courses){
            if(err) res.send(err);
            res.json(courses);
          })
  })
  router.route('/:program_id/courses/:course_id/resources')

  .get(function(req, res) {
    var query = Resource.find({course_id: req.params.course_id});
        query.exec(function(err,resources){
          if(err) res.send(err);
          res.json(resources);
        })
  })





module.exports = router;
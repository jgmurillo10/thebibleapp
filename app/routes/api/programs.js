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
  .delete(function (req,res) {
    var query = Program.find({_id: req.params.program_id}).remove();
    query.exec(function (err,program) {
      if(err) res.send(err);
      res.json(program);
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
  .post(function (req,res) {
      var course = new Course();
    course._id= mongoose.Types.ObjectId();
    course.program_id= mongoose.Types.ObjectId(req.params.program_id);
    course.description=req.body.description;
    course.url = req.body.url;
    course.name= req.body.name;
    course.code= req.body.code;

    course.save(function(err) {
            if (err){
              //duplicate etry
              if(err.code == 11000)
                return res.json({success: false, message:'A course with that name or description already exists'});
              else
                return res.send(err);
            }
            res.json({ message: 'Course created!' });
        });
  })

  router.route('/:program_id/courses/:course_id')
  .get(function(req,res){
       var query = Course.find({_id: req.params.course_id});
           query.exec(function(err, courses){
            if(err) res.send(err);
            res.json(courses);
          })
  })
  .delete(function(req,res){
    var query = Course.find({_id: req.params.course_id}).remove();
    query.exec(function (err,program) {
      if(err) res.send(err);
      res.json(program);
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
  .post(function (req,res)  {
      var resouce = new Resource();
    resouce._id= mongoose.Types.ObjectId();
    resouce.course_id= mongoose.Types.ObjectId(req.params.course_id);
    resouce.description=req.body.description;
    resouce.url = req.body.url;
    resouce.name= req.body.name;
    console.log(req.body.url);
    console.log(req.body.name)
    console.log(req.body.description)

    resouce.save(function(err) {
            if (err){
              //duplicate etry
              if(err.code == 11000)
                return res.json({success: false, message:'A resource with that name or description already exists'});
              else
                return res.send(err);
            }
            res.json({ message: 'Resource created!' });
        });
  })
  
  router.route('/:program_id/courses/:course_id/resources/:resource_id')
  .get(function (req,res) {
    var query = Resource.find({course_id: req.params.resource_id});
        query.exec(function(err,resources){
          if(err) res.send(err);
          res.json(resources);
        })
  })





module.exports = router;
var express = require('express');

var router = express.Router();
var Program = require('./../../models/program');


// on routes that end in /regions
// ----------------------------------------------------
router.route('/')

  // get all programs
  .get(function(req, res) {
    var query = Program.find();
      query.select('program_id description url name');
      query.exec(function(err, programs){
        if(err) res.send(err);
        res.json(programs);
      })
     
     
  })

  // create new program
  .post(function (req,res) {
    var program = new Program();
    program.program_id=req.body.program_id;
    program.description=req.body.description;
    program.url = req.body.url;
    program.name= req.body.name;
    
    program.save(function(err){
      if(err){
        if(err.code == 11000){
          return res.json({success: false, message: 'A program with that id already exists. '});
        }
        else
          return res.send(err);
      }
      res.json({message: 'Program created! '});
    })
  })

router.route('/:program_id')

  // get region by id
  .get(function(req, res) {
    res.json({
      message: 'Welcome to our program/id.'
    }); 
   

  })


  // fields in regions
  router.route('/:program_id/courses')

  // get fields by  region
  .get(function(req, res) {
        res.json({
        message: 'Welcome to our programs/id/courses.'
      }); 
  })

  router.route('/:program_id/courses/:course_id/files')

  .get(function(req, res) {
    res.json({
    message: 'Welcome to our files.'
  }); 
  })
  router.route('/:program_id/courses/:course_id/resources')

  .get(function(req, res) {
    res.json({
      message: 'Welcome to resources'
    })
  })





module.exports = router;
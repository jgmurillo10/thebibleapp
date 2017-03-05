'use strict';
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
    var query = File.find();
      // query.select('program_id description url name');
      query.exec(function(err, programs){
        if(err) res.send(err);
        res.json(programs);
      })
     
     
  })


module.exports = router;
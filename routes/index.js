var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
//URI de mongo user:admin pass:thebible
var url = 'mongodb://admin:thebible@ds161059.mlab.com:61059/thebible';


/* GET home page. */
router.get('/', function(req, res, next) {
  getPrograms({},
  function (programs) {
    res.render("index", {programs:programs, title:'The bible'});
  });
});

/* GET all programs*/
router.get('/api/programs', function(req, res, next) {
  getPrograms({},
  function (programs) {
    res.render("index", {programs:programs, title:'Programs'});
  });
});

function getPrograms(query, callback) {
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to Mongo");
		var programs = db.collection("programs");
		console.log(programs);

		programs.find(query).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log("Found the following records");
	    console.log(docs);
	    callback(docs);
	    db.close();
	  });
	});
}


module.exports = router;

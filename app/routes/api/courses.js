var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
//URI de mongo user:admin pass:thebible
var url = 'mongodb://admin:thebible@ds161109.mlab.com:61109/thebibledb';

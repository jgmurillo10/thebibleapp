// BASE SETUP
// ================================================

// CALL THE PACKAGES ------------------

var express 	= require('express');
var path 		= require('path');
var favicon 	= require('serve-favicon');
var logger 		= require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser 	= require('body-parser');
var config    	= require('./config');
var app 		= express();


// APP CONFIGURATION
// ==============================================

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


// log all requests to the console
app.use(logger('dev'));
// set static files location
// used for requests that our frontend will make
app.use(express.static(path.join(__dirname, '/public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



// ROUTES FOR OUR API
// ==============================================

// API ROUTES -------------------------
var apiRoutes = require('./app/routes/api');
apiRoutes.get('/', function(req,res){
	res.json({message: 'ujuuuu! Welcome to our api!'});
})
// REGISTER OUR ROUTES
//All of our routes will be prefixed with /api
app.use('/', apiRoutes);


// START THE SERVER
// ==============================================

app.listen(config.port);
console.log('Magic happens on port: '+ config.port);

module.exports = app;

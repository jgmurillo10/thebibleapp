// BASE SETUP
// ================================================
'use strict';
// CALL THE PACKAGES ------------------

var express 	= require('express');
var path 		= require('path');
var favicon 	= require('serve-favicon');
var logger 		= require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser 	= require('body-parser');
var aws 		= require('aws-sdk');
var config    	= require('./config');
var app 		= express();
var S3_BUCKET	= process.env.S3_BUCKET_NAME || 'thebibleapp';


// APP CONFIGURATION
// ==============================================

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

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
app.use('/api', apiRoutes);

// app.use('/api/s3', require('react-dropzone-s3-uploader/s3router')({
//     bucket: 'thebibleapp',
//     region: 'us-east-2', //optional 
//     headers: {'Access-Control-Allow-Origin': '*'}, // optional 
//     ACL: 'private' // this is default 
// }));

// app.get('/account', (req, res) => res.render('account.html'));

//AMAZON S3
app.get('/sign-s3', (req, res) => {
	console.log('sign-s3');
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };
  console.log('sign-s3');

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    console.log('data');
    console.log(returnData, 'data');
    console.log('after data');
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

app.post('/save-details', (req, res) => {
	// console.log(req.data);
  // TODO: Read POSTed form data and do something useful
});

//AMAZON S3
// START THE SERVER
// ==============================================

// app.listen(config.port);
// console.log('Magic happens on port: '+ config.port);

module.exports = app;

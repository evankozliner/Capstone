var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var request=require('request');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// Canned answer routes
// =============================================================================
var routerGeneralInfo = express.Router();              // get an instance of the express Router
var routerRecommendation = express.Router();              // get an instance of the express Router

// test routes to make sure everything is working (accessed at GET http://localhost:3000/api
// and http://localhost:3000/api2)
routerGeneralInfo.get('/', function(req, res) {
	 var host = 'http://dev.markitondemand.com';
  	 var pathGeneral = '/MODApis/Api/v2/Lookup/json?input=apple';
  	 var pathStock = '/MODApis/Api/v2/Quote/json?symbol=aapl';
  		
  	request(host + pathGeneral, function(err, res2, body) {
  		console.log(body);
  		res.json(JSON.parse(body));
  	});
	
    /*res.json({ name: 'Apple',
               nasdaq: 'AAPL',
               price: 121.85,
               change: '+1.88',
               CEO: 'Tim Cook'});*/
    //console.log(responseJSON);     
    //res.json(responseJSON);
});

routerRecommendation.get('/', function(req, res) {
    res.json({ name: 'Apple',
               nasdaq: 'AAPL',
               recommendation: 'Sell',
               confidence: '85.9%'});   
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routerGeneralInfo);
app.use('/api2', routerRecommendation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

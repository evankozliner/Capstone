var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressVue = require('express-vue')
var app = express();

// View engine setup
app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', __dirname + '/views');
app.set('vue', {
    componentsDir: __dirname + '/views/components',
    defaultLayout: 'layout'
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/', index);

// Canned answer routes
// =============================================================================
var routerGeneralInfo = express.Router();              // get an instance of the express Router
var routerRecommendation = express.Router();              // get an instance of the express Router

// TODO Add api routes to a sepearte file
// test routes to make sure everything is working (accessed at GET http://localhost:3000/api
// and http://localhost:3000/api2)
routerGeneralInfo.get('/', function(req, res) {
    res.json({ name: 'Apple',
               nasdaq: 'AAPL',
               price: 121.85,
               change: '+1.88',
               CEO: 'Tim Cook'});   
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

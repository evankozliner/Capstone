// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var routerGeneralInfo = express.Router();              // get an instance of the express Router
var routerRecommendation = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
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

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routerGeneralInfo);
app.use('/api2', routerRecommendation)

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

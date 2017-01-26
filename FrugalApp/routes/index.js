var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    data: {
        title: 'Fruugal',
        message: 'What is the stock price of apple?'
    },
    vue: {}
  });
});

module.exports = router;

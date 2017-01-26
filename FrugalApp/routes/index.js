var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    data: {
        title: 'Früügal',
        message: 'Enter your question here.'
    },
    vue: {}
  });
});

module.exports = router;

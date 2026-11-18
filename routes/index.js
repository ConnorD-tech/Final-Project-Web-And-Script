var express = require('express');
var router = express.Router();

/* GET home page. */
//When its "/" go to index.ejs
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

/* GET home page. */
//When its "/" go to index.ejs
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});

/* GET landing page. */
//When its "/" go to landingpage.ejs
router.get('/landingpage', function(req, res, next) {
  res.render('landingpage', { title: 'Landing Page' }); 
});

module.exports = router;



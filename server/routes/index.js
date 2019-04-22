var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login/login');
});
router.get('/register', function(req, res, next) {
  res.render('login/register');
});
router.get('/logout', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;

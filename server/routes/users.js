
var express = require('express');
var userController = require('../controllers/userController');
// var activityController = require('../controllers/activityController');

var router = express.Router();



router.post('/login',  userController.doLogin); // , activityController.insertActivity

router.post('/register', userController.doRegister);



  





module.exports = router;

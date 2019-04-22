var express = require('express');
// const activityController = require('../controllers/activityController');
var router = express.Router();
const Token = require('../auth/Token');


// router.get('/all',  activityController.findAll);
// router.get('/count',  activityController.countActivity);
// router.get('/count/token/:token', Token.verifyParamApi,  activityController.countActivity)



module.exports = router;
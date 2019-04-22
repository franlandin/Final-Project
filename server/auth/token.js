const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const SECRET = require('../config/salt').salt; // get our config file

function verifyParam(req, res, next) {
    var token = req.headers.authorization;
    console.log(token);
    if (!token){
      console.log(token);
      return res.send( {message : {type : 'error', text: 'bad credentials'}});
    }
    // verifies secret and checks exp
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err)
      return res.send( {message : {type : 'error', text: 'bad credentials'}})
  
      // if everything is good, save to request for use in other routes
      const data = decoded.id;
      req.userId = data.id;
      req.username = data.name;
      next();
    });
  }

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token;
  if (!token)
    return res.status(403).send({ auth: false, message: 'Bad credentials' });

  // verifies secret and checks exp
  jwt.verify(token, SECRET, function(err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

function buildToken (key) {
  // create a token
  var token = jwt.sign({ id: key }, SECRET, {
    //expiresIn: 86400 // expires in 24 hours
    expiresIn: 3600 // expires in 1 hour
  });
  return token;
}

function verifyParamApi(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.params.token;
  if (!token){   
    res.send({message: {"error" :true, "detail": err}})
  }
  // verifies secret and checks exp
  jwt.verify(token, SECRET, function(err, decoded) {
    if (err) res.send({message: {"error" :true, "detail": err}});

    // if everything is good, save to request for use in other routes
    const data = decoded.id;
    req.userId = data.id;
    req.username = data.name;
    next();
  });
}
module.exports = {
  verifyToken,
  buildToken,
  verifyParam,
  verifyParamApi
}
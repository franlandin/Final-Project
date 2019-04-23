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



function buildToken (key) {
  // create a token
  var token = jwt.sign({ id: key }, SECRET, {
    expiresIn: 86400 // expires in 24 hours
    //expiresIn: 3600 // expires in 1 hour
  });
  return token;
}

module.exports = {
  buildToken,
  verifyParam,

}
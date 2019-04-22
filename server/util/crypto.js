var CryptoJS = require("crypto-js");
var cypher_seed = 'some_random_charactersconst SECRET = "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy";';


const encryptPass = function(pass) {
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, cypher_seed);
    hmac.update(pass);

    var cryptedPass = hmac.finalize().toString();

    return cryptedPass;
};


module.exports = {
    encryptPass
};
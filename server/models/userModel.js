const dbConn = require('../config/dbConn');
const TABLE = "users";
const SQL_FIND_BY_USERNAME = (name) => "select * from " + TABLE + " WHERE username = '" + name + "'";

const SQL_REGISTER = (uname, upass) => "INSERT INTO " + TABLE + " (username, userpass, usertype) VALUES  ('" + uname + "', '" + upass + "', 2)";


const registerUser = (uname, upass) => {
    
    const theQuery = SQL_REGISTER(uname, upass);
    return new Promise((resolve, reject) => {
        dbConn.query(theQuery, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}


const findByUsername = name => {
    
    const theQuery = SQL_FIND_BY_USERNAME(name);
    return new Promise((resolve, reject) => {
        dbConn.query(theQuery, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}
module.exports = {
    findByUsername,
    registerUser
}
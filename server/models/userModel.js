const dbConn = require('../config/dbConn');
const TABLE = "users";
const SQL_FIND_BY_USERNAME = (name) => "select * from " + TABLE + " WHERE username = '" + name + "'";

const SQL_REGISTER = (uname, upass) => "INSERT INTO " + TABLE + " (username, userpass, usertype) VALUES  ('" + uname + "', '" + upass + "')";

const SQL_UPDATE_USER= (type, price, city, add, userId) => "UPDATE users SET usertype = '" + type + "', care_price = '" + price  + "', city = '" + city + "', address = '" + add + "' WHERE user_id = " + userId;



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

const updateUser = (type, price, city, add, userId) => {
    
    const theQuery = SQL_UPDATE_USER(type, price, city, add, userId);
    return new Promise((resolve, reject) => {
        dbConn.query(theQuery, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}
module.exports = {
    findByUsername,
    registerUser,
    updateUser 
}
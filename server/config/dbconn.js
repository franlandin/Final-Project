const mysql        = require('mysql');
const dbConn   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "foo",
  password : "bar",
  database : "doges_kittos"
});


dbConn.connect(err => {
  if (err) throw err;
});

console.log('Connected to database');

module.exports = dbConn;

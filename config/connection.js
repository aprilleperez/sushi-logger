// Import mysql package
var mysql = require("mysql");

// Declare the connection var
var connection;

// Determine deployed or local connection
if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sushi_db'
  })
};

// Start connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;

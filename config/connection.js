// ----------------------------------------------- DONE ----------------------------------------------- //
// Import mysql package
var mysql = require("mysql");

// Set up connection to mysql db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password", // try hiding this?
  database: "sushi_db"
});

// Start connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;




// FOR JAWS DB
// var connection;

// if (process.env.JAWSDB_URL) {
// 	// DB is JawsDB on Heroku
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: '',
// 		database: 'burgers_db'
// 	})
// };
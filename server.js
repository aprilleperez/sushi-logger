// Import EXPRESS and EXPRESS HANDLEBARS package
var express = require("express");
var exphbs = require("express-handlebars");

// Create INSTANCE OF EXPRESS in app var.
var app = express();

// Set up the PORT (process.env.port sets deployed port, number sets local host)
var PORT = process.env.PORT || 4050;

// Set up MIDDLEWARE to parse URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content (images, etc) for the app from the 'public directory - then on the main.handlebars page, anytime you reference a path from the public file, you don't need to write public, just, for ex: /assets/css/burger_style.css
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import ROUTES from controller and give the server access to them.
var routes = require("./controllers/sushi_controller.js");

app.use(routes);

// set up LISTENER
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
// Import express package
var express = require("express");

// set express router function to router app for file use
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var sushi = require("../models/sushi.js");


// Create all routes and set up logic w/in those routes where required
router.get("/", function (req, res) {
    sushi.all(function (data) {
        var hbsObject = {
            sushis: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // this shows all current DB states to the browser
    });
});

// This post route will add a new sushi, need post function
router.post("/api/sushis", function (req, res) {
    sushi.create(["sushi_name"], [req.body.sushi_name], function (data) {
        res.redirect("/"); // updates addtion in real time
    });
});

router.put("/api/sushis", function (req, res) {
    sushi.update({
        devoured: true // updates devoured state from false to true
    }, req.body.id, function (data) {
        res.end(); // updates switch in real time
    });
});


// Export routes for server.js to use.
module.exports = router;

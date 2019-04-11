// ----------------------------------------------- KEEP WORKING ----------------------------------------------- //
// Import express package
var express = require("express");
// set express router function to router app for file use
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var sushi = require("../models/sushi.js"); // try "/sushi" is .js doesn't work


// Create all routes and set up logic w/in those routes where required
router.get("/", function (req, res) {
    sushi.all(function (data) {
        var hbsObject = {
            sushis: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // this shows all current DB states
    });
});

// This post route will add a new sushi, need post function
router.post("/api/sushis", function (req, res) {
    sushi.create(["sushi_name"], [req.body.sushi_name], function(data) {
        res.redirect("/"); // THIS UPDATES SUSHIS TO EAT IN REAL TIME
    });
});

router.put("/api/sushis", function (req, res) {
    // var condition = "id = " + req.body.id;

    // console.log("condition", condition);

    sushi.update({
        devoured: true
    }, req.body.id, function(data) {
        console.log("this was hit");
        // res.redirect("/");
        res.end();
    });
});

// Export routes for server.js to use.
module.exports = router;




  // sushi.create(["sushi_name", "devoured"], [req.body.sushi_name, req.body.devoured], function (result) {
    //     // Send back the ID of the new quote
    //     res.json({ id: result.insertId });
    //     // res.end();
    // });





        // sushi.update(
    //     {
    //         devoured: req.body.devoured;
    //     },
    //     condition,
    //     function (result) {
    //         if (result.changedRows === 0) {
    //             // If no rows were changed, then the ID must not exist, so 404
    //             return res.status(404).end();
    //         }
    //         res.status(200).end();

    //     }
    // );










// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });

//   router.post("/api/cats", function(req, res) {
//     cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });

//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update(
//       {
//         sleepy: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
//       }
//     );
//   });
// ----------------------------------------------- KEEP WORKING ----------------------------------------------- //
// Import the ORM from orm.js to create functions that will interact with the database
var orm = require("../config/orm.js");

var sushi = {
    // selects all data from sushis table in db
    all: function (callback) {
        orm.all("sushis", function (modelRes) {
            callback(modelRes);
        });
    },

    // The variables cols and vals are arrays.  FIX THIS!!!!!!
    create: function (cols, vals, callback) {
        orm.create("sushis", cols, vals, function (modelRes) {
            callback(modelRes);
        });
    },

    update: function (objColVals, condition, callback) {    // FIX THIS!!!!!!
        orm.update("sushis", objColVals, condition, function (modelRes) {
            callback(modelRes);
        });
    } //,

    // delete: function (cols, value, callback) {
    //     orm.delete("sushis", cols, value, function (modelRes) {
    //         callback(modelRes);
    //     });
    // }
};

// Export the database functions for the controller
module.exports = sushi;











// var cat = {
//     all: function(cb) {
//       orm.all("cats", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("cats", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("cats", objColVals, condition, function(res) {
//         cb(res);
//       });
//     }
//   };
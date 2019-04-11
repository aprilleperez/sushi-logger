// Import the ORM from orm.js to create functions that will interact with the database
var orm = require("../config/orm.js");

// sushi var will be exported as a middle man between ORM file's base functions and controller file's interaction with client
var sushi = {
    all: function (callback) {
        orm.all("sushis", function (modelRes) {
            callback(modelRes);
        });
    },

    create: function (cols, vals, callback) {
        orm.create("sushis", cols, vals, function (modelRes) {
            callback(modelRes);
        });
    },

    update: function (objColVals, condition, callback) {
        orm.update("sushis", objColVals, condition, function (modelRes) {
            callback(modelRes);
        });
    }
};

// Export the database functions for the controller
module.exports = sushi;

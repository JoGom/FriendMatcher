//links to the files that holds the friends data array
let friendData = require("../data/friends");

module.exports = function(app) {
    
    //shows friend data as JSON on the page
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    //uses body parsing middleware to add new items to array based on new entries
    app.post("/api/friends", function(req, res){
        friendData.push(req.body);
    });

    // app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     friendData = [];
    // });
    
};



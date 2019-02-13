//links to the files that holds the friends data array
let friendData = require("../data/friends");

module.exports = function(app) {
    
    //shows friend data as JSON on the page
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    //uses body parsing middleware to add new items to array based on new entries
    app.post("/api/friends", function(req, res){

        let newFriend = req.body;
        let bestMatch = {};
        for(let i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        arrayDiff(friendData[0].scores);
        function arrayDiff(friendArray){
            let x = newFriend.scores.map(function(item, index){
                return Math.abs(item - friendArray[index]);
            });
            console.log(x);
            let diff = x.reduce((a, b) => a + b, 0);
            console.log(diff);
        };
        friendData.push(newFriend);
        res.json(bestMatch)
    });

    // app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     friendData = [];
    // });
    
};



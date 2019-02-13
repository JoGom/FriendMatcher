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
        let bestMatchArr = [];
        //for loop that turns the score array into integer format
        for(let i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        //for loop that finds the difference for every number in the array
        for(let i = 0; i < friendData.length; i++){
        let x = newFriend.scores.map(function(item, index){
            return Math.abs(item - friendData[i].scores[index]);
        });
        //creates objects based on similarity score and pushes them to an array
        let matchObj = {similarScore: x.reduce((a, b) => a + b, 0), friend: friendData[i]}
        bestMatchArr.push(matchObj);
        }
        //default value for closest match in case the 1st index in array is the smallest
        let closestMatch = bestMatchArr[0];
        //loops through the array bestmatchArr and sets closestMatch equal to where similarScore was the lowest
        for(let i = 1; i < bestMatchArr.length; i++){
           
            if(closestMatch.similarScore > bestMatchArr[i].similarScore){
                closestMatch = bestMatchArr[i];
            }
        }
        console.log(closestMatch);

        friendData.push(newFriend);
        res.json(closestMatch);
    });

};



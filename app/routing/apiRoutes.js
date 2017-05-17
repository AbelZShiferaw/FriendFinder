//imports the "friends.js" file
var friends = require('../data/friends');

//creat dependency with "path"
var path = require('path');


//exporting the API routes
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	app.post('/api/friends', function(req, res){

		var createMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);
		
		var userInput 	= req.body;
		var userName 	= userInput.name;
		var userImage 	= userInput.image;
		var userScores 	= userInput.scores;

		var totalDifference = 0;

		
		for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			
			for(var j = 0; j < 10; j++){
				
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
			
				if (totalDifference <= createMatch.friendDifference){

					
					createMatch.name = friends[i].name;
					createMatch.photo = friends[i].photo;
					createMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(userInput);
 
		res.json(createMatch);
	});
};
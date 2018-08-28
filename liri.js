
//1.At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// 2. At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use
var spotify = new Spotify(keys.spotify);

var spotify = require("node-spotify-api");
var keys = require('./keys.js');
var fs = require("fs");
var request = require("request");

//EXAMPLE: var command = process.argv[2]; //This will always be the command - Why aren't we doing it that way below?
//EXAMPLE: var thing = process.argv[3]; // song, movie or band


//var command? = process.argv[2];

//song=thing....wtf is command on the above line? Does that matter or are they just a list starting with 2?
var song = process.argv[3];

//check
//console.log(process.argv);

// 3. Make it so liri.js can take in one of the following arguments
//  * my-tweets
//  * spotify-this-song
//  * movie-this
//  * do-what-it-says
if(command === 'spotify-this-song'){
    spotifyThis(song);
} else if(command === 'movie-this'){
    movieThis(movie);
} else if(command === 'concert-this'){
    concertThis(concert)
} else if(command === 'do-what-it-says') {
    doWhatItSays();
}

// 2. `node liri.js spotify-this-song '<song name here>'
//    * This will show the following information about the song in your terminal/bash window
//      * Artist(s) 
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

function spotifyThis(song){
    spotify.search({ type: 'track', query: song }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    var response = data.tracks.items;
      response.forEach(song => {
        console.log(song.name)
        console.log(song.artists[0].name) 
        console.log(song.album.name)
        console.log(song.href)
        console.log('----------------********************----------------')
      })
    });
    }


    function movieThis(movie){
        request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
            if (!error && response.statusCode === 200) {
            console.log(movie + " has a rating of: " + JSON.parse(body).imdbRating);
            }
        });
    }





// var song = process.argv[2]
 
// spotify.search({ type: 'track', query: song }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
// var chicken = data.tracks.items;

//   chicken.forEach(chick => {
//     console.log(chick.name)
//     console.log(chick.artists[0].name) 
//     console.log(chick.album.name)
//     console.log(chick.href)
//     console.log('----------------********************----------------')
//   })
// });
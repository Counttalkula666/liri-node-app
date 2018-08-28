//check to make sure this is working:

console.log('this is loaded');

//api keys:

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


//Why don't I have to do this for every API? Where do the URLs go?
// exports.omdb = {
//   id: process.env.OMDB_ID
// };

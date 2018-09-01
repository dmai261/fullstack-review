const request = require('request');
const config = require('../config.js');
const dbMethod = require('../database/index.js')

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: "https://api.github.com/users/" + username + "/repos",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, function(error, response, body){
    console.log('error:', error); // Print the error if one occurred
    let bod = JSON.parse(body);
    dbMethod.save(bod)
  })
}

let getReposFromDb = (cb) => {
  dbMethod.retrieve(cb);
}

module.exports.getReposByUsername = getReposByUsername;
module.exports.getReposFromDb = getReposFromDb;
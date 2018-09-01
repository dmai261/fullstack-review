const request = require('request');
// const config = require('../config.js');
const dbMethod = require('../database/index.js')

let getReposByUsername = (username, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: "https://api.github.com/users/" + username + "/repos",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.token}`
    }
  };
  
  request(options, function(error, response, body){
    if (error) {
      console.log(error);
    } else {
      let bod = JSON.parse(body);
      dbMethod.save(bod, cb);
    }
  })
}

let getReposFromDb = (cb) => {
  dbMethod.retrieve(cb);
}

module.exports.getReposByUsername = getReposByUsername;
module.exports.getReposFromDb = getReposFromDb;
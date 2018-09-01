const request = require('request');
const config = require('../config.js');
const saveMethod = require('../database/index.js')
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
    // console.log('body:', body);
    let bod = JSON.parse(body);
    saveMethod.save(bod)

  })
}

module.exports.getReposByUsername = getReposByUsername;
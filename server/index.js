var getRepos =  require('../helpers/github');
const express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  getRepos.getReposByUsername(req.body.name, res.send.bind(res));
});

app.get('/repos', function (req, res) {
  // TODO - your code  here!
  // This route should send back the top 25 repos
  let cb = (data)=>{
    res.send(data);
  }
  getRepos.getReposFromDb(cb);
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // id: {type: Number, unique: true},
  id: {type:String, unique:true, dropDups: true},
  name: {type:String, unique:true},
  url: String,
  created_at: Date,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var i = 0; i < data.length; i++) {
    let repos = new Repo({
      id: data[i].id, name: data[i].name, url: data[i]["html_url"], created_at: new Date() 
    });

    repos.save((err, repo)=>{
      if (err) return console.error(err);
      console.log(repo)
    })
  }

  cb('Data Saved!');
}

let retrieve = (cb) => {
  Repo.find().sort({'created_at':-1}).limit(25).exec((err, thing)=> {
    if (err) console.error(err);
    cb(thing);
  })
}

module.exports.save = save;
module.exports.retrieve = retrieve;
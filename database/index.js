const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  name: String,
  username: String,
  url: String,
  forks: Number
});

// making it into a class
let Repo = mongoose.model('Repo', repoSchema);

// receive args... repos, an array of objs from github
let save = (repos) => {
// Repo.create takes an array of objs and create from all of them
  return Repo.create(repos)
  // return Promise.all(repos.map(repo => {
  //   return new Repo(repo).save()
  // }))
}

let getAll = () => {
  return Repo.find({}).sort('-forks').limit(25).exec()
}

module.exports.save = save;
module.exports.getAll = getAll;
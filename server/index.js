const express = require('express');
var bodyParser = require('body-parser');
const {getAll, save} = require('../database/index.js');
const getRepos = require('../helpers/github.js');

let app = express();
module.exports.app = app;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// serve to client files
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //
  let username = req.body.username;
  // invoke the helper function here passing the username from post
    // save the repos to the db
    // send 201 sucess
  getRepos(username)
    .then(data => {
      save(data)
    })
    .then(() => {
      res.status(201).send()
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getAll()
    .then((data) => {
      res.send(data)
    })
});

//set port
let port = 1128 || process.env.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


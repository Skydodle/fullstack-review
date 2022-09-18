const axios = require('axios').default;
// const config = require('../config.js');
const config = process.env.GIT_TOKEN || require('../config.js').TOKEN;

let getRepos = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(options.url, options.headers)
    .then(res => {
      // pass data back to server?
      return res.data
    })
    .catch(err => {
      return console.log(err)
    })
}

module.exports = getRepos;
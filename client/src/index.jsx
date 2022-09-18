import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    },
    this.get = this.get.bind(this);
  }

  get() {
    axios.get('/repos')
    .then(res => {
      var repoData = res.data;
      this.setState({
        repos: repoData
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  search (term) {
    axios.post('/repos', {username: term})
    .then(res => {
      return this.get();
    })
    .catch((error) => {
        console.log(error);
    })
    // post request to server with username
    // if post success then send get request
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <strong>There are {props.repos.length} repos.</strong><br></br>
    {props.repos.map (repo => {
      return (
        <div> {repo.name} {repo.forks} {repo.url}</div>
      )
    })}
  </div>
)

export default RepoList;
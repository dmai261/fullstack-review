import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    You have {props.repos.length} repos!
    {props.repos.map(function(repo){
      return <div><a href={repo.url}>{repo.name}</a></div>
    })}
  </div>
)

export default RepoList;
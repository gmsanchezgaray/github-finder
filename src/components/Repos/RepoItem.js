import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="user__repos-card">
      <h4 className="mx-1">
        <a href={repo.html_url} target="blank">
          {repo.name}
        </a>
      </h4>
      <div className="user__repos-card-detail my-1">
        <small className="mx-1">{repo.language && `◼ ${repo.language}`}</small>
        <small className="text-right">
          <i className="fas fa-code-branch mx"></i>
          {repo.forks}
        </small>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;

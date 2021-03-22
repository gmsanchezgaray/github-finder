import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Repos from "../Repos/Repos";

import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);

  const { login } = useParams();

  useEffect(() => {
    githubContext.getUser(login);
    githubContext.getUserRepos(login);
  }, []);

  const content = githubContext.user ? (
    <>
      Hireable: {""}
      {githubContext.user.hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={githubContext.user.avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{githubContext.user.name}</h1>
          <p>Location: {githubContext.user.location}</p>
        </div>
        <div>
          {githubContext.user.bio && (
            <>
              <h3>Bio</h3>
              <p>{githubContext.user.bio}</p>
            </>
          )}
          <a
            target="blank"
            href={githubContext.user.html_url}
            className="btn btn-dark my-1"
          >
            Visit my Github
          </a>
          <ul>
            <li>
              {githubContext.user.login && (
                <>
                  <strong>Username: </strong> {githubContext.user.login}
                </>
              )}
            </li>
            <li>
              {githubContext.user.company && (
                <>
                  <strong>Company: </strong> {githubContext.user.company}
                </>
              )}
            </li>
            <li>
              {" "}
              {githubContext.user.blog && (
                <>
                  <strong>Website: </strong> {githubContext.user.blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: {githubContext.user.followers}
        </div>
        <div className="badge badge-success">
          Following: {githubContext.user.following}
        </div>
        <div className="badge badge-light">
          Public Repos: {githubContext.user.public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {githubContext.user.public_gists}
        </div>
      </div>
    </>
  ) : (
    <h2>No se encontro ese usuario</h2>
  );

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      {content}

      <Repos repos={githubContext.repos} />
    </>
  );
};

export default User;

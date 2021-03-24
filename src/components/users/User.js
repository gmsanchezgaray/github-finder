import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Repos from "../Repos/Repos";

import Logo from "../layout/logo-navbar.svg";

import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);

  const { login } = useParams();

  useEffect(() => {
    githubContext.getUser(login);
    githubContext.getUserRepos(login);
  }, []);

  return (
    <>
      <nav className="navbar bg-gray">
        <h1>
          <img className="logo" src={Logo} alt="Logo App" />
        </h1>
        <Link to="/">
          <button className="btn btn-primary">Back to Search</button>
        </Link>
      </nav>
      <div className="user__header">
        <div className="user__span-hireable text-light">
          Hireable: {""}
          {githubContext.user.hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </div>
        <div className="text-light grid-2 px-3">
          <div className="all-center">
            <img
              src={githubContext.user.avatar_url}
              className="round-img user__img-profile my-1"
              alt=""
            />
            <h2>{githubContext.user.name}</h2>
            <a
              target="blank"
              href={githubContext.user.html_url}
              className="user__login my"
            >
              @{githubContext.user.login}
            </a>

            <div className="my-1 text-center">
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
          </div>
          <div>
            {githubContext.user.bio && (
              <div className="user__bio py-1 my-1">
                <h3 className="user__quote-top">
                  <i className="fas fa-quote-left"></i>
                </h3>
                <p className="text-center">{githubContext.user.bio}</p>
                <h3 className="user__quote-bot">
                  <i className="fas fa-quote-left"></i>
                </h3>
              </div>
            )}
            <h4>Personal Information</h4>
            <div className="user__title-decoration my"></div>
            <ul className="my-1">
              <li>
                {githubContext.user.location && (
                  <>
                    <i className="fas fa-map-marker-alt mx"></i>{" "}
                    {githubContext.user.location}
                  </>
                )}
              </li>
              <li>
                {githubContext.user.company && (
                  <>
                    <i className="fas fa-briefcase  mx"></i>
                    {githubContext.user.company}
                  </>
                )}
              </li>
              <li>
                {" "}
                {githubContext.user.blog && (
                  <>
                    <i className="fas fa-paper-plane mx"></i>{" "}
                    {githubContext.user.blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-3 py-2">
        <h3 className="user__repos-title">Most popular repositories</h3>
        <div className="user__repos-title-decoration my-1"></div>
        <div className="grid-3">
          <Repos repos={githubContext.repos} />
        </div>
      </div>
    </>
  );
};

export default User;

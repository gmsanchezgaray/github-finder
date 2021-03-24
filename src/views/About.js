import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/layout/logo-navbar.svg";
import Background from "../components/layout/about-background.png";

const About = () => {
  return (
    <>
      <nav className="navbar bg-gray">
        <h1>
          <img className="logo" src={Logo} alt="Logo App" />
        </h1>
        <Link to="../">
          <button className="btn btn-primary">Back</button>
        </Link>
      </nav>
      <img
        className="about-background"
        src={Background}
        alt="Illustration of Octocat working"
      />
      <div className="container about-container">
        <div className="about-card">
          <h1 className="about-card__title ">Take a Look</h1>
          <p className="about-card__description">
            GitHub Finder is an application to search Github users, built with
            React. A better look at your GitHub profile! Includes profile bio,
            repositories, status, followers, following and where you work.{" "}
            <br />
            <small>Version: 1.0.0</small>
          </p>

          <ul className="about-card__button-container">
            <li className="about-card__button" title="Contact me">
              <a href="mailto:gmsanchezgaray@gmail.com">
                <i className="fas fa-envelope-square medium text-primary"> </i>
              </a>
            </li>
            <li className="about-card__button" title="Check the code">
              <a
                href="https://github.com/gmsanchezgaray/github-finder"
                target="blank"
              >
                <i className="fab fa-github-square medium text-primary"></i>
              </a>
            </li>
          </ul>
          <ul className="about-card__button-container">
            <li className="about-card__span">
              <a href="https://reactjs.org" target="blank">
                React
              </a>
            </li>
            <li className="about-card__span ">
              <a
                href="https://docs.github.com/en/rest/reference/users"
                target="blank"
              >
                GitHub API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

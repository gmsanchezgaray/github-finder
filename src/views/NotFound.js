import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/layout/logo-navbar.svg";
import Background from "../components/layout/error-background.png";

const NotFound = () => {
  const message = `We cant't find the page you're looking for. You can either return to
the previous page, visit our homepage or contact our support team.`;

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
        <div className="error-card">
          <h1 className="about-card__title ">Page Not Found</h1>
          <p className="about-card__description text-light">{message}</p>
          <Link to="/">
            <button className="btn btn-primary my-1">Visit Homepage</button>
          </Link>
          <a href="mailto:gmsanchezgaray@gmail.com">
            <button className="btn btn-light my-1">Contact Us</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;

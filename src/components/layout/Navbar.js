import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "./logo-navbar.svg";
import Search from "../users/Search";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-gray">
        <h1>
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo App" />
          </Link>
        </h1>
        <ul>
          <li>
            <Search />
          </li>
          <li className="sub-caption about-info all-center ">
            <Link to="/about" title="About this App">
              i
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

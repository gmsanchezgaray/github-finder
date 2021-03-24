import React from "react";
import Search from "../users/Search";

import Octocats from "./octocats-working.jpg";
import LogoBlack from "./black-logo.svg";

const Onboarding = () => {
  return (
    <div className="all-center">
      <img className="logo-black" src={LogoBlack} alt="Logo of GitHub Finder" />
      <h3 className="onboarding-title">GitHub Finder</h3>
      <p className="onboarding-instructions">
        Enter a username or name that you want to search for on GitHub. Be as
        specific as possible. GitHub Finder will try to display the results most
        similar to your search.
      </p>
      <Search />
      <img
        className="onboarding-octocats"
        src={Octocats}
        alt="Illustration of Octocats"
      />
    </div>
  );
};

export default Onboarding;

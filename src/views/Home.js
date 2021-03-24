import React, { useContext } from "react";
import Navbar from "../components/layout/Navbar";
import Users from "../components/users/Users";
import Onboarding from "../components/layout/Onboarding";

import GithubContext from "../context/github/githubContext";
import NotFoundUsers from "../components/layout/NotFoundUsers";

const Home = () => {
  const githubContext = useContext(GithubContext);

  let users_list = githubContext.users;

  return (
    <>
      {!githubContext.onboarding ? <Navbar /> : null}
      <div className={!githubContext.onboarding && "container"}>
        {githubContext.onboarding ? <Onboarding /> : null}
        <Users />
        {!githubContext.onboarding & (users_list.length === 0) ? (
          <NotFoundUsers />
        ) : null}
      </div>
    </>
  );
};

export default Home;

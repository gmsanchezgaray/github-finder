import React, { useContext } from "react";
import NotFoundImg from "./not-found-users.jpg";

import GithubContext from "../../context/github/githubContext";

const NotFoundUsers = () => {
  const githubContext = useContext(GithubContext);

  return (
    <>
      {githubContext.loading ? null : (
        <>
          <h3 clasName="lead">No results found</h3>
          <div className="divider"></div>
          <div className="not-found-card p-1">
            <ul>
              <li className="sub-caption">• Check the spelling of the word.</li>
              <li className="sub-caption">
                • Use more <b>generic words</b> or fewer words.
              </li>
              <li className="sub-caption">
                • Do <b>not use symbols</b> for search.
              </li>
            </ul>
            <img
              className="not-found-img"
              src={NotFoundImg}
              alt="illustration of Octocat searching"
            />
          </div>
        </>
      )}
    </>
  );
};

export default NotFoundUsers;

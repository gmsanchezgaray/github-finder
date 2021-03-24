import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Alert = () => {
  const githubContext = useContext(GithubContext);

  const content = githubContext.alert_message ? (
    <div className={`alert alert-${githubContext.alert_type}`}>
      <i className="fas fa-info-circle mx" />
      {githubContext.alert_message}
    </div>
  ) : null;
  return content;
};

export default Alert;

import React, { useState, useContext } from "react";
import Alert from "../../components/layout/Alert";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [searchText, setSearchText] = useState("");

  const [inputFocus, setInputFocus] = useState(false);

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchText === "") {
      githubContext.setAlert("Please enter something", "danger");
    } else {
      githubContext.searchUsers(searchText);
      setSearchText("");
    }
  };

  const onClickInput = () => {
    setInputFocus(true);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          className={
            searchText || inputFocus ? "input-focus" : "input-inactive"
          }
          type="text"
          name="text"
          placeholder="Search"
          value={searchText}
          onChange={onInputChange}
          onClick={onClickInput}
        />
        {(searchText || inputFocus) && (
          <button className="btn btn-search">
            <i className="fas fa-search"></i>
          </button>
        )}
        {githubContext.users.length !== 0 && (
          <button className="btn btn-clear" onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </form>
      <div className="navbar-container">
        <Alert />
      </div>
    </div>
  );
};

export default Search;

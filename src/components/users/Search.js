import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [searchText, setSearchText] = useState("");

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchText === "") {
      githubContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(searchText);
      setSearchText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={searchText}
          onChange={onInputChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length !== 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

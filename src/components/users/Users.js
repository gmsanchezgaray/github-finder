import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  let users_list = githubContext.users;
  return (
    <>
      {githubContext.loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
          }}
        >
          {users_list.map((user, key) => {
            return (
              <UserItem
                key={key}
                id={user.id}
                avatar={user.avatar_url}
                login={user.login}
                github_url={user.html_url}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Users;

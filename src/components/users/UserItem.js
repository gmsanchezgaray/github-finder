import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className="card text-center" id={props.id}>
      <img
        src={props.avatar}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{props.login}</h3>
      <div>
        <Link to={`/user/${props.login}`} className="btn btn-dark btn-sm my-1">
          Show profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  id: Proptypes.number.isRequired,
  avatar: Proptypes.string.isRequired,
  login: Proptypes.string.isRequired,
  github_url: Proptypes.string,
};

export default UserItem;

import axios from "axios";
import React, { useReducer } from "react";
import PropTypes from "prop-types";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert_message: null,
    alert_type: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (searchText) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&
      client_id=${githubClientId}&
      client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  //Get User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?
      client_id=${githubClientId}&
      client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
      client_id=${githubClientId}&
      client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Clear Data
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Alert
  const setAlert = (alert_message, alert_type) => {
    dispatch({ type: SET_ALERT, alert_message, alert_type });
    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  //Remove Alert
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert_message: state.alert_message,
        alert_type: state.alert_type,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

GithubState.propTypes = {
  children: PropTypes.array.isRequired,
};

export default GithubState;

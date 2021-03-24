import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  SET_ONBOARDING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ONBOARDING:
      return {
        ...state,
        onboarding: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
        onboarding: true,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert_message: action.alert_message,
        alert_type: action.alert_type,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert_message: null,
        alert_type: null,
      };
    default:
      return { state };
  }
};

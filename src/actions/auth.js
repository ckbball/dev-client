import axios from "axios";

import { setAlert } from "./alert";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:8080/v1/auth");

    if (res.data.status === "no") {
      dispatch({
        type: AUTH_ERROR
      });
    } else {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
// parameters are from signup component, or the one that calls the action within its body
export const register = ({
  username,
  email,
  password,
  experience,
  languages
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const langArr = languages.split(",");

  const newRequest = {
    api: "v1",
    user: {
      username,
      email,
      password,
      experience,
      languages: langArr
    }
  };

  const body = JSON.stringify(newRequest);

  try {
    const res = await axios.post(
      "http://localhost:8080/v1/signup",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
// parameters are from sign in component, or the one that calls the action within its body
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const newRequest = {
    api: "v1",
    email: email,
    password: password
  };

  console.log(newRequest);

  const body = JSON.stringify(newRequest);

  try {
    const res = await axios.post(
      "http://localhost:8080/v1/login",
      body,
      config
    );

    console.log(res.data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, "danger"));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

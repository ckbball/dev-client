import axios from "axios";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    // call this to get teams belonging to user
    const res1 = await axios.get(`/v1/myteams}`, config);

    if (res1.data.status !== "no") {
      const out = {
        teams: res1.data.teams
      };

      dispatch({ type: GET_PROFILE, payload: out });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

import axios from "axios";

import { SEARCH_TEAMS, SEARCH_ERROR, TEAM_INIT } from "./types";

// Search Teams
export const searchTeams = (page, searchValue) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  searchValue = searchValue.toLowerCase();
  const levels = ["beginner", "middle", "senior"];
  const roles = ["frontend", "backend", "devops", "design"];

  var requestString = `http://localhost:8082/api/v1/teams?page=${page}&limit=10`;
  var uri = "";

  if (roles.indexOf(searchValue) > -1) {
    uri = requestString.concat(`&role=${searchValue}`);
  } else if (levels.indexOf(searchValue) > -1) {
    uri = requestString.concat(`&level=${levels.indexOf(searchValue) + 1}`);
  } else {
    uri = requestString;
  }

  try {
    // call this to get teams belonging to user
    const res1 = await axios.get(uri, config);

    if (res1.data.status !== "No teams found") {
      const out = {
        teams: res1.data.teams
      };

      dispatch({ type: SEARCH_TEAMS, payload: out });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Init Teams
export const initTeam = () => async dispatch => {
  dispatch({ type: TEAM_INIT });
};

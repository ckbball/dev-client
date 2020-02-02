import { SEARCH_TEAMS, SEARCH_ERROR } from "../actions/types";

const initialState = {
  teams: [],
  loading: true,
  error: {},
  cooldown: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_TEAMS:
      return {
        ...state,
        teams: payload,
        loading: false,
        cooldown: new Date().getTime()
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

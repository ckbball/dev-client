import { GET_PROFILE } from "../actions/types";

const initialState = {
  profile: null, // languages, experience, teams
  profiles: [], // user listing page ! dont know if i need this yet
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
}

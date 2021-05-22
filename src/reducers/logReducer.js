/* Log reducer, gets sent to our rootReducer */

import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  CLEAR_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS,
} from "../actions/types";

// create initial states for this reducer
const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_LOG:
      return "";
    case DELETE_LOG:
      return "";
    case UPDATE_LOG:
      return "";
    case GET_LOGS:
      return {
          ...state,
          logs: action.payload,
          loading: false
      };
    case SET_CURRENT:
      return "";
    case CLEAR_CURRENT:
      return "";
    case CLEAR_LOGS:
      return "";
    case SEARCH_LOGS:
      return "";

    default:
      return state;
  }
};

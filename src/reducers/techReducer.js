import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  CURRENT_TECH,
  CLEAR_CURRENT_TECH,
  UPDATE_TECH,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  techs: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TECH:
      return "";
    case CURRENT_TECH:
      return "";
    case CLEAR_CURRENT_TECH:
      return "";
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

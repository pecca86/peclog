/* Our REDUX root reducer */

// For combining different reducers with the root reducer
import { combineReducers } from "redux";

// own reducers
import logReducer from "./logReducer";
import techReducer from "./techReducer"

// takes in all custom reducers
export default combineReducers({
  log: logReducer,
  tech: techReducer
});

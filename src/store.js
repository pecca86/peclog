/* OUR REDUX STORE */
import { createStore, applyMiddleware } from "redux";
// so that we can use the browser redux dev tools
import { composeWithDevTools } from "redux-devtools-extension";
// allows for async actions
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// initial app-level state
const initialState = {};

// redux middleware
const middleware = [thunk];

// create a redux store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

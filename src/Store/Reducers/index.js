import counterReducer from "./counter";
import logReducer from "./isLogged";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  logged: logReducer
});
export default allReducers;

import { combineReducers } from "redux";
import user from "./users_reducer";

export default combineReducers({
  users: user,
});

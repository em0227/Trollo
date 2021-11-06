import { combineReducers } from "redux";
import user from "./users_reducer";
import boards from "./board_reducer";
import lists from "./list_reducers";

export default combineReducers({
  users: user,
  boards,
  lists,
});

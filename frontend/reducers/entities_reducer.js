import { combineReducers } from "redux";
import user from "./users_reducer";
import boards from "./board_reducer"

export default combineReducers({
  users: user,
  boards,

});

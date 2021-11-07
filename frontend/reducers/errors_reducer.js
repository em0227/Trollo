import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import board from "./board_errors_reducer";
import list from "./list_errors_reducer";
import card from "./card_errors_reducer";

export default combineReducers({
  session,
  board,
  list,
  card,
});

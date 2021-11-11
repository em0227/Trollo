import { combineReducers } from "redux";
import user from "./users_reducer";
import boards from "./board_reducer";
import lists from "./list_reducers";
import cards from "./card_reducer";
import comments from "./comment_reducer";

export default combineReducers({
  users: user,
  boards,
  lists,
  cards,
  comments,
});

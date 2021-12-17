// import modal from "./modal_reducer";
// import email from "./eamil_reducer";
// import filter from "./filter_reducer";
// import showLeftNav from "./leftnav_reducer";
// import { combineReducers } from "redux";

// export default combineReducers({
//   modal,
//   email,
//   showLeftNav,
//   filter,
// });

import {
  CLOSE_MODAL,
  OPEN_CREATE_BOARD,
  OPEN_CARD,
} from "../actions/modal_actions";
import {
  ADD_EMAIL_FROM_SPLASH,
  SHOW_LEFT_NAV,
  CHOOSE_BACKGROUND,
} from "../actions/ui_actions";
import { SEARCHED_USERS } from "../actions/filter_actions";
import {
  LOADING_START,
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
} from "../actions/board_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _deafult_state = {
  email: "",
  modal: null,
  search: [],
  indexLoading: false,
  background: "",
};

export default (state = _deafult_state, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_EMAIL_FROM_SPLASH:
      newState.email = action.email;
      return newState;
    case OPEN_CREATE_BOARD:
      newState.modal = "create_board";
      return newState;
    case OPEN_CARD:
      newState.modal = "open_card";
      newState.cardOpened = action.cardId;
      // debugger;
      return newState;
    case CLOSE_MODAL:
      newState.modal = null;
      return newState;
    case SHOW_LEFT_NAV:
      newState.showLeftNav = action.status;
      return newState;
    case SEARCHED_USERS:
      newState.search = action.results;
      return newState;
    case LOADING_START:
      return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_BOARDS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_BOARD:
      return Object.assign({}, state, { indexLoading: false, background: "" });
    case CHOOSE_BACKGROUND:
      newState.background = action.background;
      return newState;
    default:
      return state;
  }
};

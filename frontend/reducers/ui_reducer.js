import {
  CLOSE_MODAL,
  OPEN_CREATE_BOARD,
  OPEN_CARD,
} from "../actions/modal_actions";
import { ADD_EMAIL_FROM_SPLASH } from "../actions/ui_actions";
const _deafult_state = { email: "", modal: null };

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
      return newState;
    case CLOSE_MODAL:
      newState.modal = null;
      return newState;
    default:
      return state;
  }
};

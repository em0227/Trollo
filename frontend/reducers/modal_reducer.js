import {
  CLOSE_MODAL,
  OPEN_CREATE_BOARD,
  OPEN_CARD,
} from "../actions/modal_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
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
    default:
      return state;
  }
};

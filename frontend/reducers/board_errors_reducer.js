import {
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  RECEIVE_BOARD_ERRORS,
} from "../actions/board_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_BOARD:
      return [];
    case RECEIVE_BOARDS:
      return [];
    default:
      return state;
  }
};

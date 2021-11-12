import {
  LOADING_START,
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
} from "../actions/board_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const initialState = {
  indexLoading: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOADING_START:
      return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_BOARDS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_BOARD:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { indexLoading: false });
    default:
      return state;
  }
};

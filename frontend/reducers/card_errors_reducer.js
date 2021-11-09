import {
  RECEIVE_CARD,
  RECEIVE_CARDS,
  RECEIVE_CARD_ERRORS,
} from "../actions/card_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARD_ERRORS:
      if (action.errors.responseJSON) return action.errors.responseJSON;
    case RECEIVE_CARD:
      return [];
    case RECEIVE_CARDS:
      return [];
    default:
      return state;
  }
};

import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  RECEIVE_LIST_ERRORS,
} from "../actions/list_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      if (action.errors.responseJSON) return action.errors.responseJSON;
    case RECEIVE_LIST:
      return [];
    case RECEIVE_LISTS:
      return [];
    default:
      return state;
  }
};

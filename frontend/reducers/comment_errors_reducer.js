import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT_ERRORS,
} from "../actions/comment_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      if (action.errors.responseJSON) return action.errors.responseJSON;
    case RECEIVE_COMMENT:
      return [];
    case RECEIVE_COMMENTS:
      return [];
    default:
      return state;
  }
};

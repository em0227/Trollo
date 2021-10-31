import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.user.id]: action.user };
    default:
      return state;
  }
};

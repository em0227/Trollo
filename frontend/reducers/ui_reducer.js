import { ADD_EMAIL_FROM_SPLASH } from "../actions/ui_actions";
const _deafult_state = { email: "" };

export default (state = _deafult_state, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_EMAIL_FROM_SPLASH:
      newState.email = action.email;
      return newState;
    default:
      return state;
  }
};

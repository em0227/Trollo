import { SHOW_LEFT_NAV } from "../actions/ui_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SHOW_LEFT_NAV:
      newState.showLeftNav = action.status;
      return newState;
    default:
      return state;
  }
};

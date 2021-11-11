import { SEARCHED_USERS } from "../actions/filter_actions";
const _default = { search: [] };
export default (state = _default, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SEARCHED_USERS:
      newState.search = action.results;
      return newState;
    default:
      return state;
  }
};

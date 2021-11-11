import * as APIUtil from "../util/filter_api_util";

// export const UPDATE_FILTER = "UPDATE_FILTER";

// for more dynamic use in the future
// export const changeFilter = (filter, value) => ({
//   type: UPDATE_FILTER,
//   filter,
//   value,
// });

export const SEARCHED_USERS = "SEARCHED_USERS";

export const searchResults = (results) => ({
  type: SEARCHED_USERS,
  results,
});

export const matchedUsers = (filter) => (dispatch) => {
  APIUtil.matchedUsers(filter).then((users) => dispatch(searchResults(users)));
};

import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = (user) => ({
  type: LOGOUT_CURRENT_USER,
  user,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signupUser(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.loginUser(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );

//why can't I use .catch?

export const logout = () => (dispatch) =>
  APIUtil.logoutUser().then((user) => dispatch(logoutCurrentUser(user)));

//logout don't need userId? that's why we render show in the destroy method!

export const fetchUser = (userId) => (dispatch) =>
  APIUtil.fetchUser(userId).then((user) => dispatch(receiveCurrentUser(user)));

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUserInfo(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const demoUserLogin = () => (dispatch) =>
  APIUtil.demoUserLogin().then((user) => dispatch(receiveCurrentUser(user)));

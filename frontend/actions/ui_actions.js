export const ADD_EMAIL_FROM_SPLASH = "ADD_EMAIL_FROM_SPLASH";
export const SHOW_LEFT_NAV = "SHOW_LEFT_NAV";

export const addEmail = (email) => ({
  type: ADD_EMAIL_FROM_SPLASH,
  email,
});

export const showLeftNav = (status) => ({
  type: SHOW_LEFT_NAV,
  status,
});

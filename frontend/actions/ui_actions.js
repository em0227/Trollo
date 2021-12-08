export const ADD_EMAIL_FROM_SPLASH = "ADD_EMAIL_FROM_SPLASH";
export const SHOW_LEFT_NAV = "SHOW_LEFT_NAV";
export const CHOOSE_BACKGROUND = "CHOOSE_BACKGROUND";

export const addEmail = (email) => ({
  type: ADD_EMAIL_FROM_SPLASH,
  email,
});

export const showLeftNav = (status) => ({
  type: SHOW_LEFT_NAV,
  status,
});

export const chooseBackground = (url) => ({
  type: CHOOSE_BACKGROUND,
  background: url,
});

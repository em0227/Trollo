export const signupUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user},
  });

export const loginUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user},
  });

export const logoutUser = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

export const fetchUser = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });
// maybe no need for this?

export const updateUserInfo = (user) =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: {user},
  });

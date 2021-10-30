export const signupUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    user,
  });

export const loginUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    user,
  });

export const logoutUser = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

// export const fetchUser = (userId) =>
//   $.ajax({
//     method: "GET",
//     url: `/api/users/${userId}`,
//   });
// no need for this

export const updateUserInfo = (user) =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    user,
  });

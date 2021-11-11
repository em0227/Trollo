export const matchedUsers = (filter) =>
  $.ajax({
    method: "GET",
    url: "api/users",
    data: {
      filter,
    },
  });

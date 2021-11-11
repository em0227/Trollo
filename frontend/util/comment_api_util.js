export const fetchAllComments = (cardId) =>
  $.ajax({
    method: "GET",
    url: `api/cards/${cardId}/comments`,
  });

export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: `api/comments/`,
    data: { comment },
  });

export const updateComment = (comment) =>
  $.ajax({
    method: "PATCH",
    url: `api/comments/${comment.id}`,
    data: { comment },
  });

export const deleteComment = (commentId) =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`,
  });

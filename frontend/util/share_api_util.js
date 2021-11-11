export const shareBoard = (boardId, co_worker_id) =>
  $.ajax({
    method: "POST",
    url: `/api/boards/${boardId}/share`,
    data: {
      co_worker_id,
    },
  });

export const unshareBoard = (boardId, co_worker_id) =>
  $.ajax({
    method: "DELETE",
    url: `/api/boards/${boardId}/unshare`,
    data: {
      co_worker_id,
    },
  });

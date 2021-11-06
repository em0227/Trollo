export const fetchAllLists = (boardId) =>
  $.ajax({
    method: "GET",
    url: `api/boards/${boardId}/lists`,
  });

export const createList = (list) =>
  $.ajax({
    method: "POST",
    url: `api/lists/`,
    data: { list },
  });

export const updatelist = (list) =>
  $.ajax({
    method: "PATCH",
    url: `api/Lists/${list.id}`,
    data: { list },
  });

export const deletelist = (listId) =>
  $.ajax({
    method: "DELETE",
    url: `api/lists/${listId}`,
  });

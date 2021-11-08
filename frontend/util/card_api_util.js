export const fetchAllCards = (boardId) =>
  $.ajax({
    method: "GET",
    url: `api/boards/${boardId}/cards`,
  });

export const createCard = (card) =>
  $.ajax({
    method: "POST",
    url: `api/cards/`,
    data: { card },
  });

export const updateCard = (formData, cardId) =>
  $.ajax({
    method: "PATCH",
    url: `api/cards/${cardId}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deleteCard = (cardId) =>
  $.ajax({
    method: "DELETE",
    url: `api/cards/${cardId}`,
  });

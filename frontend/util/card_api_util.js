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

export const updateCardWithForm = (formData, cardId) =>
  $.ajax({
    method: "PATCH",
    url: `api/cards/${cardId}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const updateCard = (card) =>
  $.ajax({
    method: "PATCH",
    url: `api/cards/${card.id}`,
    data: { card },
  });

export const deleteCard = (cardId) =>
  $.ajax({
    method: "DELETE",
    url: `api/cards/${cardId}`,
  });

export const deleteAttachment = (cardId, imageId) =>
  $.ajax({
    method: "DELETE",
    url: `api/cards/${cardId}/attachments/${imageId}`,
  });

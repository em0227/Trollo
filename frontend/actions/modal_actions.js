export const OPEN_CREATE_BOARD = "OPEN_CREATE_BOARD";
export const OPEN_CARD = "OPEN_CARD";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openCreateBoard = () => ({
  type: OPEN_CREATE_BOARD,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openCard = (cardId) => ({
  type: OPEN_CARD,
  cardId,
});

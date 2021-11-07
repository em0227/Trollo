export const findBoardByTitle = (boards, title) => {
  const boardArray = Object.values(boards);
  let targetBoard;
  boardArray.forEach((board) => {
    if (board.title === title) {
      targetBoard = board;
    }
  });
  return targetBoard;
};

//boardArray [{board1},{board2}]

export const findCardsByList = (cards, listId) => {
  const cardsArray = Object.values(cards);
  let cardsInList = [];
  cardsArray.forEach((card) => {
    if (card.list_id === listId) {
      cardsInList.push(card);
    }
  });
  return cardsInList;
};

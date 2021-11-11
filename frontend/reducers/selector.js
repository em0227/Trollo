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

export const orderCardInList = (cards) => {
  if (cards.length === 0) return cards;
  const cardsArray = Object.values(cards);
  const root = cardsArray.find((card) => card.predecessor_id == 0);
  let order = [root];
  // debugger;
  //need to pop out cardsArray until it's empty
  while (cardsArray.length > 0) {
    cardsArray.forEach((card, i) => {
      //find the card's predecessor, if it's the last ele in the order array, push the card in the order array
      if (card.predecessor_id === order.at(-1).id) {
        order.push(card);
        cardsArray.splice(i, 1);
      }
    });
  }
  // debugger;
  return order;
};

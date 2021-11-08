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

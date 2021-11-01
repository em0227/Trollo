import * as APIUtil from '../util/board_api_util'

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS,
    boards
})

const receiveBoard = (board) => ({
    type: RECEIVE_BOARD,
    board
})

const removeBoard = (boardId) => ({
    type: REMOVE_BOARD,
    boardId
})

const receiveBoardErrors = (errors) => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})

export const fetchAllBoards = () => (dispatch) => (
    APIUtil.fetchAllBoards()
    .then((boards) => dispatch(receiveBoards(boards)),
    (err) => dispatch(receiveBoardErrors(err))
    )
);


export const fetchBoard = (boardId) => (dispatch) => (
    APIUtil.fetchBoard(boardId)
    .then((board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
    )
);

export const createBoard = (board) => (dispatch) => (
    APIUtil.createBoard(board)
    .then((board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
    )
)

export const updateBoard = (board) => (dispatch) => (
    APIUtil.updateBoard(board)
    .then((board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
    )
)

export const deleteBoard = (boardId) => (dispatch) => (
    APIUtil.deleteBoard(boardId)
    .then((board) => dispatch(removeBoard(board.id)),
    (err) => dispatch(receiveBoardErrors(err))
    )
)
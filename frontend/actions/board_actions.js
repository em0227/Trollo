import * as APIUtil from "../util/board_api_util";
import { fetchUser } from "../util/session_api_util";
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board,
});

const removeBoard = (boardId) => ({
  type: REMOVE_BOARD,
  boardId,
});

export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors,
});

export const fetchAllBoards = (userId) => (dispatch) =>
  APIUtil.fetchAllBoards(userId).then(
    (boards) => dispatch(receiveBoards(boards)),
    (err) => dispatch(receiveBoardErrors(err))
  );

export const fetchUserAndAllBoards = (userId) => (dispatch) =>
  fetchUser(userId).then((user) => {
    dispatch(receiveCurrentUser(user));
    APIUtil.fetchAllBoards(userId).then(
      (boards) => dispatch(receiveBoards(boards)),
      (err) => dispatch(receiveBoardErrors(err))
    );
  });

export const fetchBoard = (boardId) => (dispatch) =>
  APIUtil.fetchBoard(boardId).then(
    (board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
  );

export const createBoard = (board) => (dispatch) =>
  APIUtil.createBoard(board).then(
    (board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
  );

export const updateBoard = (board) => (dispatch) =>
  APIUtil.updateBoard(board).then(
    (board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
  );

export const deleteBoard = (boardId) => (dispatch) =>
  APIUtil.deleteBoard(boardId).then(
    (boardId) => dispatch(removeBoard(boardId)),
    (err) => dispatch(receiveBoardErrors(err))
  );

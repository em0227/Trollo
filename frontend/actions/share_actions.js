import * as APIUtil from "../util/share_api_util";
import { receiveBoard, receiveBoardErrors } from "./board_actions";

export const shareBoard = (boardId, coWorderId) => (dispatch) =>
  APIUtil.shareBoard(boardId, coWorderId).then(
    (board) => dispatch(receiveBoard(board)),
    (err) => dispatch(receiveBoardErrors(err))
  );

export const unshareBoard = (boardId, coWorderId) => (dispatch) =>
  APIUtil.unshareBoard(boardId, coWorderId).then(
    (board) => {
      dispatch(receiveBoard(board));
    },
    (err) => dispatch(receiveBoardErrors(err))
  );

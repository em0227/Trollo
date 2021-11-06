import * as APIUtil from "../util/list_api_util";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";

const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists,
});

const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list,
});

const removeList = (listId) => ({
  type: REMOVE_LIST,
  listId,
});

const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors,
});

export const fetchAllLists = (boardId) => (dispatch) =>
  APIUtil.fetchAllLists(boardId).then(
    (lists) => dispatch(receiveLists(lists)),
    (err) => dispatch(receiveListErrors(err))
  );

export const createList = (list) => (dispatch) =>
  APIUtil.createList(list).then(
    (list) => dispatch(receiveList(list)),
    (err) => dispatch(receiveListErrors(err))
  );

export const updateList = (list) => (dispatch) =>
  APIUtil.updateList(list).then(
    (list) => dispatch(receiveList(list)),
    (err) => dispatch(receiveListErrors(err))
  );

export const deleteList = (listId) => (dispatch) =>
  APIUtil.deleteList(listId).then(
    (listId) => dispatch(removeList(listId)),
    (err) => dispatch(receiveListErrors(err))
  );

import * as APIUtil from "../util/card_api_util";

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";

const receiveCards = (cards) => ({
  type: RECEIVE_CARDS,
  cards,
});

const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card,
});

const removeCard = (cardId) => ({
  type: REMOVE_CARD,
  cardId,
});

const receiveCardErrors = (errors) => ({
  type: RECEIVE_CARD_ERRORS,
  errors,
});

export const fetchAllCards = (listId) => (dispatch) =>
  APIUtil.fetchAllCards(listId).then(
    (cards) => dispatch(receiveCards(cards)),
    (err) => dispatch(receiveCardErrors(err))
  );

export const createCard = (card) => (dispatch) =>
  APIUtil.createCard(card).then(
    (card) => dispatch(receiveCard(card)),
    (err) => dispatch(receiveCardErrors(err))
  );

export const updateCardWithForm = (formData, cardId) => (dispatch) =>
  APIUtil.updateCardWithForm(formData, cardId).then(
    (card) => dispatch(receiveCard(card)),
    (err) => dispatch(receiveCardErrors(err))
  );

export const updateCard = (card) => (dispatch) =>
  APIUtil.updateCard(card).then(
    (card) => dispatch(receiveCard(card)),
    (err) => dispatch(receiveCardErrors(err))
  );

export const deleteCard = (cardId) => (dispatch) =>
  APIUtil.deleteCard(cardId).then(
    (cardId) => dispatch(removeCard(cardId)),
    (err) => dispatch(receiveCardErrors(err))
  );

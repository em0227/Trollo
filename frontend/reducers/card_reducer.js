import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
} from "../actions/card_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CARDS:
      return Object.assign({}, newState, action.cards);
    case RECEIVE_CARD:
      // if (typeof action.card.imageUrls === "string") {
      //   action.card.imageUrls = [action.card.imageUrls];
      // }
      // debugger;
      let newCard = Object.assign({}, newState[action.card.id], action.card);
      newState[action.card.id] = newCard;
      return newState;
    case REMOVE_CARD:
      delete newState[action.cardId];
      return newState;
    default:
      return state;
  }
};

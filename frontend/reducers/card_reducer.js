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
      return action.cards;
    case RECEIVE_CARD:
      newState[action.card.id] = action.card;
      return newState;
    case REMOVE_CARD:
      delete newState[action.cardId];
      return newState;
    default:
      return state;
  }
};

import CardsIndex from "./card_index";
import { connect } from "react-redux";
import {
  fetchAllCards,
  createCard,
  updateCard,
  deleteCard,
} from "../../actions/card_actions";
import { findCardsByList, orderCardInList } from "../../reducers/selector";
import { openCard } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const cards = findCardsByList(state.entities.cards, ownProps.list.id);
  // const orderedCards = orderCardInList(cards);
  return {
    boardId: ownProps.boardId,
    list: ownProps.list,
    cards: cards,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: (boardId) => dispatch(fetchAllCards(boardId)),
  createCard: (card) => dispatch(createCard(card)),
  updateCard: (card) => dispatch(updateCard(card)),
  openCard: (cardId) => dispatch(openCard(cardId)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);

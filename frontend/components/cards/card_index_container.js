import CardsIndex from "./card_index";
import { connect } from "react-redux";
import {
  fetchAllCards,
  createCard,
  updateCard,
} from "../../actions/card_actions";
import { findCardsByList } from "../../reducers/selector";
import { openCard } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  list: ownProps.list,
  cards: findCardsByList(state.entities.cards, ownProps.list.id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: (boardId) => dispatch(fetchAllCards(boardId)),
  createCard: (card) => dispatch(createCard(card)),
  updateCard: (card) => dispatch(updateCard(card)),
  openCard: (cardId) => dispatch(openCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);

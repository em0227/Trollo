import CardsIndex from "./card_index";
import { connect } from "react-redux";
import { fetchAllCards } from "../../actions/card_actions";
import { findCardsByList } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  list: ownProps.list,
  cards: findCardsByList(state.entities.cards, ownProps.list.id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: (boardId) => dispatch(fetchAllCards(boardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);

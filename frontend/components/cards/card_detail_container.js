import { updateCard } from "../../actions/card_actions";
import { connect } from "react-redux";
import CardDetail from "./card_detail";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  let card = state.entities.cards[state.ui.cardOpened];
  let listTitle = state.entities.lists[card.list_id].title;
  return {
    card,
    listTitle,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal),
  updateCard: (formData, cardId) => dispatch(updateCard(formData, cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

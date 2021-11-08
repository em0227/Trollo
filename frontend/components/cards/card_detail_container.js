import { updateCardWithForm } from "../../actions/card_actions";
import { connect } from "react-redux";
import CardDetail from "./card_detail";
import { closeModal, openCard } from "../../actions/modal_actions";

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
  updateCardWithForm: (formData, cardId) =>
    dispatch(updateCardWithForm(formData, cardId)),
  openCard: (cardId) => dispatch(openCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

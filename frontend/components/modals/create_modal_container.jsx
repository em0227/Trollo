import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import BoardForm from "../board_display/board_form";
import CardDetailContainer from "../cards/card_detail_container";

const CreateModal = ({ modal, closeModal, createBoard, errors }) => {
  if (!modal) {
    return null;
  }
  let component;
  let special;
  switch (modal) {
    case "create_board":
      component = (
        <BoardForm
          createBoard={createBoard}
          errors={errors}
          closeModal={closeModal}
        />
      );
      break;
    case "open_card":
      special = "card-detail";
      // debugger;
      component = <CardDetailContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div
        className={`modal-child ${special}`}
        onClick={(e) => e.stopPropagation()}
      >
        <a className="closebtn" onClick={closeModal}>
          &times;
        </a>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    createBoard: ownProps.createBoard,
    errors: state.errors.board,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);

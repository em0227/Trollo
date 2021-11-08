import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import BoardForm from "../board_display/board_form";

const CreateModal = ({ modal, closeModal, createBoard, errors }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "create_board":
      component = <BoardForm createBoard={createBoard} errors={errors} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
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

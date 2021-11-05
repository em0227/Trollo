import BoardDisplayAll from "./board_display_all";
import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";
import { openCreateBoard } from "../../actions/modal_actions";
import { showLeftNav } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
  showLeftNav: state.ui.leftNav,
});

const mapDispatchToProps = (dispatch) => ({
  createBoard: (board) => dispatch(createBoard(board)),
  openCreateBoard: () => dispatch(openCreateBoard()),
  changeLeftNavDisplay: (status) => dispatch(showLeftNav(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplayAll);

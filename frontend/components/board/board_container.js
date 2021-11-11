import BoardIndex from "./board_index";
import {
  createBoard,
} from "../../actions/board_actions";
import { connect } from "react-redux";
import { openCreateBoard } from "../../actions/modal_actions";
import { showLeftNav } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  boards: ownProps.boards,
  leftNav: state.ui.showLeftNav,
});

const mapDispatchToProps = (dispatch) => ({
  createBoard: (board) => dispatch(createBoard(board)),
  openCreateBoard: () => dispatch(openCreateBoard()),
  showLeftNav: (status) => dispatch(showLeftNav(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);

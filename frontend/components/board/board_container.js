import BoardIndex from "./board_index";
import { logout, fetchUser } from "../../actions/session_actions";
import {
  fetchAllBoards,
  createBoard,
  fetchUserAndAllBoards,
} from "../../actions/board_actions";
import { connect } from "react-redux";
import { openCreateBoard } from "../../actions/modal_actions";
import { showLeftNav } from "../../actions/ui_actions";

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
  leftNav: state.ui.showLeftNav,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
  fetchUserAndAllBoards: (userId) => dispatch(fetchUserAndAllBoards(userId)),
  createBoard: (board) => dispatch(createBoard(board)),
  openCreateBoard: () => dispatch(openCreateBoard()),
  showLeftNav: (status) => dispatch(showLeftNav(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);

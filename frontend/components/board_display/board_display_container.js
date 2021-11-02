import BoardDisplay from "./board_display";
import { connect } from "react-redux";
import {
  fetchAllBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => ({
  //   user: state.entities.users[ownProps.match.params.userId],
  boards: Object.values(state.entities.boards),
  board: null,
});

const mapDispatchToProps = (dispatch) => ({
  //   fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
  createBoard: (board) => dispatch(createBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplay);

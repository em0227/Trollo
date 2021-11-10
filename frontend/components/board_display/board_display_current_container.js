import BoardDisplayCurrent from "./board_display_current";
import { connect } from "react-redux";
import {
  updateBoard,
  deleteBoard,
  fetchBoard,
} from "../../actions/board_actions";
import { fetchAllLists } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
  history: ownProps.history,
});

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDisplayCurrent);

import BoardDisplayCurrent from "./board_display_current";
import { connect } from "react-redux";
import {
  updateBoard,
  deleteBoard,
  fetchBoard,
} from "../../actions/board_actions";
import { findBoardByTitle } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => ({
  board: findBoardByTitle(
    state.entities.boards,
    ownProps.match.params.boardTitle
  ),
});

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDisplayCurrent);

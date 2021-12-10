import BoardDisplayCurrent from "./board_display_current";
import { connect } from "react-redux";
import {
  updateBoard,
  deleteBoard,
  fetchBoard,
} from "../../actions/board_actions";
import { fetchAllLists } from "../../actions/list_actions";
import { matchedUsers } from "../../actions/filter_actions";
import { shareBoard, unshareBoard } from "../../actions/share_actions";

const mapStateToProps = (state, ownProps) => {
  let board = state.entities.boards[ownProps.match.params.boardId];
  return {
    board,
    history: ownProps.history,
    searchResults: Object.values(state.ui.search),
    loading: state.ui.indexLoading,
    background: state.ui.background,
    currentUser: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId, history) => dispatch(deleteBoard(boardId, history)),
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  matchedUsers: (filter) => dispatch(matchedUsers(filter)),
  shareBoard: (boardId, coworkerId) =>
    dispatch(shareBoard(boardId, coworkerId)),
  unshareBoard: (boardId, coworkerId, history) =>
    dispatch(unshareBoard(boardId, coworkerId, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDisplayCurrent);

import BoardDisplayCurrent from "./board_display_current";
import { connect } from "react-redux";
import {
  updateBoard,
  deleteBoard,
  fetchBoard,
} from "../../actions/board_actions";
import { fetchAllLists } from "../../actions/list_actions";
import { matchedUsers } from "../../actions/filter_actions";
import { shareBoard } from "../../actions/share_actions";

const mapStateToProps = (state, ownProps) => {
  let board = state.entities.boards[ownProps.match.params.boardId];
  return {
    board,
    history: ownProps.history,
    owner: state.entities.users[state.session.id].name,
    searchResults: Object.values(state.ui.search),
    loading: state.ui.indexLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  matchedUsers: (filter) => dispatch(matchedUsers(filter)),
  shareBoard: (boardId, coworkerId) =>
    dispatch(shareBoard(boardId, coworkerId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDisplayCurrent);

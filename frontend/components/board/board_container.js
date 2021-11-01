import BoardIndex from "./board_index";
import { logout, fetchUser } from "../../actions/session_actions";
import { fetchAllBoards } from "../../actions/board_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  boards: state.entities.boards,
  board: null,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);

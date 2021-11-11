import { fetchUserAndAllBoards } from "../../actions/board_actions";
import { connect } from "react-redux";
import Main from "./main";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserAndAllBoards: (userId) => dispatch(fetchUserAndAllBoards(userId)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import BoardDisplayAll from "./board_display_all";
import { connect } from "react-redux";
import { openCreateBoard } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
});

const mapDispatchToProps = (dispatch) => ({
  openCreateBoard: () => dispatch(openCreateBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplayAll);

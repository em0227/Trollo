import BoardDisplayAll from "./board_display_all";
import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
});

const mapDispatchToProps = (dispatch) => ({
  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplayAll);

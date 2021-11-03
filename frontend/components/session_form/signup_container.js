import { connect } from "react-redux";
import {
  signup,
  demoUserLogin,
  removeSessionErrors,
} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  formType: "Sign Up",
  errors: state.errors.session,
  link: "/login",
  history: ownProps.history,
  email: state.ui.email,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  demoUserLogin: () => dispatch(demoUserLogin()),
  removeErrors: () => dispatch(removeSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

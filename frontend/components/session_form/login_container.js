import { connect } from "react-redux";
import {
  login,
  demoUserLogin,
  removeSessionErrors,
} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  formType: "Log In",
  errors: state.errors.session,
  link: "/signup",
  history: ownProps.history,
  email: "",
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  demoUserLogin: () => dispatch(demoUserLogin()),
  removeErrors: () => dispatch(removeSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

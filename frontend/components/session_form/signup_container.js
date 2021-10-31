import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  formType: "Sign Up",
  errors: state.errors.session,
  link: "/login"
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

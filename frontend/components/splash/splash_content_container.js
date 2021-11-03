import { connect } from "react-redux";
import { addEmail } from "../../actions/ui_actions";
import SplashContent from "./splash_content";

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(SplashContent);

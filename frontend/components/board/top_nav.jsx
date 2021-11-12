import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  form() {
    const { user } = this.props;
    if (this.state.showForm) {
      return (
        <div className="user-menu">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button>Settings</button>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    const { user } = this.props;
    if (!user.name) return null;
    return (
      <nav className="board-nav">
        <img src={window.images.whiteLogo} alt="trollo-logo" />
        <div className="links">
          <a target="_blank" href="https://github.com/em0227">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/emilyawu/">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          {/* <i className="far fa-bell"></i> */}
          <div
            className="user-setting"
            onClick={this.toggleForm.bind(this)}
            onBlur={this.toggleForm.bind(this)}
          >
            <p className="profile-image">{user.name.charAt(0).toUpperCase()}</p>
            {this.form()}
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;

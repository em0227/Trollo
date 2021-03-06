import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: "",
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    //how do I ensure only successful submit will redirect to show page?
    // this.props.history.push('/users/userId/boards')
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i} style={{color: 'red'}}>{error}</li>
        ))}
      </ul>
    );
  }

  renderNameField() {
    if (this.props.formType === "Sign Up") {
      return (
        <div className="name">
          <br />
          <input
            type="text"
            onChange={this.handleInput("name")}
            value={this.state.name}
            placeholder="  Name"
            className="name"
          />
        </div>
      );
    }
  }

  loginDemo(e) {
    e.preventDefault();
    this.props.demoUserLogin();
  }

  render() {
    const { formType, link } = this.props;
    const linkName = formType === "Sign Up" ? "Log In" : "Sign Up";
    return (
      <div className="login-background">
        <img src={window.images.purpleLogo} alt="trollo-logo" />
        <div className="login-form-container">
          <h2>{formType}</h2>
          {this.renderErrors()}
          <br />
          <form onSubmit={this.handleSubmit} className="login-form">
            <input
              type="email"
              onChange={this.handleInput("email")}
              value={this.state.email}
              placeholder="  Email"
            />
            <br />
            <input
              type="password"
              onChange={this.handleInput("password")}
              value={this.state.password}
              placeholder="  Password"
            />
            {this.renderNameField()}
            <br />
            <button>{formType}</button>
            <br />
            Or <Link to={link}>{linkName}</Link>
            <br />
          </form>
          Or log in as
          <input type="submit" onClick={this.loginDemo} value="Demo User" />
        </div>
      </div>
    );
  }
}

export default SessionForm;

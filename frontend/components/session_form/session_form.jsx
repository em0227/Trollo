import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    //how do I ensure only successful submit will redirect to show page?
    // this.props.history.push('/users/user:id/boards')
  }

  renderErros() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          <li key={i}>{error}</li>;
        })}
      </ul>
    );
  }

  render() {
    const { formType, link } = this.props;
    const linkName = formType === 'Sign Up' ? "Log In" : "Sign Up";
    return (
      <div>
        <h2>{formType}</h2>
        {this.renderErros()}
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            onChange={this.handleInput("email")}
            value={this.state.email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={this.handleInput("password")}
            value={this.state.password}
          />
          <label>Name</label>
          <input
            type="text"
            onChange={this.handleInput("name")}
            value={this.state.name}
          />
          <br />
          <button>{formType}</button>
          <br />
          Or <Link to={link}>{linkName}</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;

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
    // this.props.history.push('/users/userId/boards')
  }

  renderErros() {
    // console.log('in the render errors')
    // console.log(this.props.errors)
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  renderNameField() {
    if (this.props.formType === 'Sign Up') {
      return (
        
          <label>Name
            <br />
          <input
            type="text"
            onChange={this.handleInput("name")}
            value={this.state.name}
          /></label>
       
      )
    }
  }

  render() {
    const { formType, link } = this.props;
    const linkName = formType === 'Sign Up' ? "Log In" : "Sign Up";
    return (
      <div className="login-background">
        <img src={window.images.logo} alt="trollo-logo" />
        <div> 
          <h2>{formType}</h2>
          {this.renderErros()}
          <form onSubmit={this.handleSubmit} className="login-form">
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
            {this.renderNameField()}
            <br />
            <button>{formType}</button>
            <br />
            Or <Link to={link}>{linkName}</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;

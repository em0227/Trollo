import React from "react";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    // if no this, will only have id in the user state as that's what I bootstraped
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <h3>Hi, {user.name}</h3>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default BoardIndex;

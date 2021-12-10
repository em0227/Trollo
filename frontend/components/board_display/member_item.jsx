import React from "react";

class MemberInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    };
  }

  toggleDetail(e) {
    e.stopPropagation();
    this.setState({
      showDetail: !this.state.showDetail,
    });
  }

  detail(user, permission) {
    if (this.state.showDetail) {
      const boardAction =
        permission === "Admin" ? "Delete Board" : "Leave Board";
      const boardActionMethod =
        permission === "Admin"
          ? this.submitDelete.bind(this)
          : this.submitLeave.bind(this);
      return (
        <div className="coworker-detail">
          <p>Permission : {permission}</p>
          <div className="current-user">
            <div className="profile-image">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="current-user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <button onClick={boardActionMethod}>{boardAction}</button>
        </div>
      );
    }
  }

  submitDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.board.id, this.props.history);
    // console.log(this.props);
    this.props.history.push("/users/currentUser/boards");
  }

  submitLeave(e) {
    e.preventDefault();
    this.props.unshareBoard(this.props.board.id, this.props.coworker.id);
    if (this.props.currentUser === this.props.coworker.id) {
      this.props.history.push("/users/currentUser/boards");
    }
  }

  render() {
    const member = this.props.coworker ? this.props.coworker : this.props.owner;
    const permission = this.props.coworker ? "Normal" : "Admin";
    return (
      <div className="whos-on-board" onClick={this.toggleDetail.bind(this)}>
        <p>{member.name}</p>
        {this.detail(member, permission)}
      </div>
    );
  }
}

export default MemberInfo;

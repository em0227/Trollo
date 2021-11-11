import React from "react";
import TopNav from "./top_nav";
import BoardContainer from "./board_container";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUserAndAllBoards(this.props.user.id);
  }

  render() {
    const { user, boards } = this.props;
    return (
      <div className="main">
        <TopNav user={user} logout={this.props.logout}/>
        <BoardContainer user={user} boards={boards} />
      </div>
    );
  }
}

export default Main;

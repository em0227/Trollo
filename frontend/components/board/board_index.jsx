import React from "react";
import { NavLink } from "react-router-dom";
import BoardIndexItems from "./board_index_items";
import BoardSideBar from "./board_side_bar";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAllBoards(this.props.match.params.userId);
    // if no this, will only have id in the user state as that's what I bootstraped
  }

  componentDidUpdate(prevProps) {
    // this.props.fetchUser(this.props.match.params.userId);
    // console.log(prevProps);
    // if (prevProps.boards !== this.props.boards)
    //   this.props.fetchAllBoards(this.props.match.params.userId);
  }

  render() {
    const { user, logout, boards, board, createBoard } = this.props;
    // debugger;
    if (!Array.isArray(boards)) return null;
    return (
      <div className="board">
        <nav className="board-nav">
          <img src={window.images.logo} alt="trollo-logo" />
          <div className="links">
            <p>Notifications</p>
            <p>User Settings</p>
            <button onClick={logout}>Log Out</button>
          </div>
        </nav>
        <h3>{user.name}'s Workapace</h3>
        <div className="board-main">
          <BoardSideBar boards={boards} />
          <BoardIndexItems
            boards={boards}
            board={board}
            createBoard={createBoard}
          />
        </div>
      </div>
    );
  }
}

export default BoardIndex;

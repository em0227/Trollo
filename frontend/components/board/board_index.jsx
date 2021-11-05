import React from "react";
import { NavLink, Switch } from "react-router-dom";
import BoardDisplayAllContainer from "../board_display/board_display_all_container";
import BoardDisplayCurrentContainer from "../board_display/board_display_current_container";
import BoardLeftSideBar from "./board_left_side_bar";
import { ProtectedRoute } from "../../util/route_util";
import CreateModalContainer from "../modals/create_modal_container";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
    this.props.fetchAllBoards(this.props.user.id);
    if (this.props.location.pathname === "/") {
      this.props.history.push(`/users/${this.props.user.id}/boards`);
    }
    // if no this, will only have id in the user state as that's what I bootstraped
    // refactor it to not attach to params, which is safer and make my board frontend routes possible
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === "/") {
      this.props.history.push(`/users/${this.props.user.id}/boards`);
    }
    //switch somehow can't match loosely thus above code
  }

  render() {
    const { user, logout, boards, createBoard, openCreateBoard } = this.props;
    if (boards.length === 0) return null;
    return (
      <div className="board">
        <nav className="board-nav">
          <img src={window.images.whiteLogo} alt="trollo-logo" />
          <div className="links">
            <p>Notifications</p>
            <p>User Settings</p>
            <button onClick={logout}>Log Out</button>
          </div>
        </nav>

        <div
          className="board-main"

        >
          <CreateModalContainer createBoard={createBoard} />

          <BoardLeftSideBar
            boards={boards}
            user={user}
            openCreateBoard={openCreateBoard}
          />

          <div className="board-display">
            <Switch>
              <ProtectedRoute
                path="/boards/:boardId"
                component={BoardDisplayCurrentContainer}
              />
              <ProtectedRoute
                path="/users/:userId/boards"
                component={BoardDisplayAllContainer}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardIndex;

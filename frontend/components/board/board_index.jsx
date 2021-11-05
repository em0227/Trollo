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
    // this.props.fetchUser(this.props.match.params.userId);
    // console.log(prevProps);
    // if (prevProps.boards !== this.props.boards)
    //   this.props.fetchAllBoards(this.props.match.params.userId);
    // this.props.fetchAllBoards(this.props.user.id);
    if (this.props.location.pathname === "/") {
      this.props.history.push(`/users/${this.props.user.id}/boards`);
    }
    //switch somehow can't match loosely thus above code
  }

  openNav(e) {
    e.preventDefault();
    this.props.changeLeftNavDisplay(true);
  }

  collapsedNavWidth() {
    if (this.props.showLeftNav) {
      return "0";
    } else {
      return "40px";
    }
  }

  marginLeft() {
    if (this.props.showLeftNav) {
      return "250px";
    } else {
      return "40px";
    }
  }

  render() {
    const { user, logout, boards, createBoard, openCreateBoard } = this.props;
    const collapsedNavWidth = this.collapsedNavWidth();
    const marginLeft = this.marginLeft();
    if (!boards) return null;
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

        <div className="board-main" style={{ marginLeft: marginLeft }}>
          <CreateModalContainer createBoard={createBoard} />
          <BoardLeftSideBar
            boards={boards}
            user={user}
            openCreateBoard={openCreateBoard}
            showLeftNav={this.props.showLeftNav}
            changeLeftNavDisplay={this.props.changeLeftNavDisplay}
          />
          <div
            onClick={this.openNav.bind(this)}
            className="side-bar-collapsed"
            style={{ width: collapsedNavWidth }}
          >
            <p>Emily</p>
            <i className="fas fa-chevron-circle-right"></i>
          </div>
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

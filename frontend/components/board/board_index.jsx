import React from "react";
import { NavLink, Switch } from "react-router-dom";
import BoardDisplayAllContainer from "../board_display/board_display_all_container";
import BoardDisplayCurrentContainer from "../board_display/board_display_current_container";
import BoardLeftSideBar from "./board_left_side_bar";
import { ProtectedRoute } from "../../util/route_util";
import CreateModalContainer from "../modals/create_modal_container";
import { openCreateBoard } from "../../actions/modal_actions";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      showLeftNav: true,
    };
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

  openNav() {
    //refactor to use css classess that are toggled by react state
    document.querySelector(".board-left-nav").style.width = "250px";
    document.querySelector(".board-main").style.marginLeft = "250px";
    document.querySelector(".side-bar-collapsed").style.width = "0";
  }

  render() {
    const { user, logout, boards, createBoard, openCreateBoard } = this.props;
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

        <div className="board-main">
          <CreateModalContainer createBoard={createBoard} />
          <BoardLeftSideBar
            boards={boards}
            user={user}
            openCreateBoard={openCreateBoard}
          />
          <div onClick={this.openNav} className="side-bar-collapsed">
            <p>Emily</p>
            <i className="fas fa-chevron-circle-right"></i>
          </div>
          <div className="board-display">
            <Switch>
              <ProtectedRoute
                path="/boards/:boardTitle"
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

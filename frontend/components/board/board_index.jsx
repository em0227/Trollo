import React from "react";
import { Switch } from "react-router-dom";
import BoardDisplayAllContainer from "../board_display/board_display_all_container";
import BoardDisplayCurrentContainer from "../board_display/board_display_current_container";
import BoardLeftSideBar from "./board_left_side_bar";
import { ProtectedRoute } from "../../util/route_util";
import CreateModalContainer from "../modals/create_modal_container";
import Loading from "./loading_icon";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchUserAndAllBoards(this.props.user.id);
    // if (this.props.location.pathname === "/") {
    //   this.props.history.push(`/users/${this.props.user.id}/boards`);
    // }
    // console.log("in index did mount");
    // if no this, will only have id in the user state as that's what I bootstraped
    // refactor it to not attach to params, which is safer and make my board frontend routes possible
  }

  componentDidUpdate(prevProps) {
    // if (this.props.location.pathname === "/") {
    //   this.props.history.push(`/users/${this.props.user.id}/boards`);
    // }
    // console.log("in index did update");
    // if (prevProps.boards !== this.props.boards) {
    //   this.props.fetchAllBoards(this.props.user.id);
    // }
    //switch somehow can't match loosely thus above code
  }

  render() {
    // console.log("in index render");
    // debugger;

    if (this.props.loading) {
      return (
        <div className="board" style={{ zIndex: "10" }}>
          {" "}
          <Loading />{" "}
        </div>
      );
    }

    const { user, boards, createBoard, openCreateBoard, leftNav } = this.props;
    let marginLeft = this.props.leftNav ? "200px" : "65px";
    return (
      <div className="board">
        <CreateModalContainer createBoard={createBoard} />

        <BoardLeftSideBar
          boards={boards}
          user={user}
          openCreateBoard={openCreateBoard}
          leftNav={leftNav}
          showLeftNav={this.props.showLeftNav}
        />

        <div className="board-display" style={{ marginLeft: marginLeft }}>
          <Switch>
            <ProtectedRoute
              path="/boards/:boardId"
              component={BoardDisplayCurrentContainer}
            />
            <ProtectedRoute
              path="/users/currentUser/boards"
              component={BoardDisplayAllContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default BoardIndex;

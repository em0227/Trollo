import React from "react";
import { NavLink } from "react-router-dom";

class BoardSideBar extends React.Component {
  closeNav() {
    document.querySelector(".board-left-nav").style.width = "0";
    document.querySelector(".board-main").style.marginLeft = "0";
    document.querySelector(".board-nav").style.marginLeft = "0";
    document.querySelector(".side-bar-collapsed").style.width = "40px";
  }
  render() {
    const { user, boards } = this.props;
    return (
      <div className="board-left-nav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.closeNav}
        >
          &times;
        </a>
        <h3>{user.name}'s Workspace</h3>
        <br />

        <div id={`/users/${user.id}/boards`} className="all-boards">
          <NavLink to={`/users/${user.id}/boards`}>All Boards</NavLink>
          <i class="fas fa-plus"></i>
        </div>
        {boards.map((board) => (
          <div
            key={board.id}
            id={`/boards/${board.title}`}
            className="single-board-in-nav"
          >
            <div
              style={{
                backgroundColor: board.bg_color,
                width: "20px",
                height: "20px",
              }}
            ></div>
            <NavLink to={`/boards/${board.title}`}>{board.title}</NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default BoardSideBar;

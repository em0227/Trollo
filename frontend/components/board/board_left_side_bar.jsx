import React from "react";
import { NavLink } from "react-router-dom";

class BoardLeftSideBar extends React.Component {
  closeNav(e) {
    e.preventDefault();
    document.querySelector(".board-left-nav").style.width = "0";
    document.querySelector(".board-main").style.marginLeft = "0";
    document.querySelector(".side-bar-collapsed").style.width = "40px";
  }

  showModal(e) {
    e.preventDefault();
    this.props.openCreateBoard();
  }

  render() {
    const { user, boards } = this.props;
    return (
      <div className="board-left-nav">
        <a className="closebtn" onClick={this.closeNav}>
          &times;
        </a>
        <h3>{user.name}'s Workspace</h3>
        <br />

        <div id={`/users/${user.id}/boards`} className="all-boards">
          <NavLink to={`/users/${user.id}/boards`}>All Boards</NavLink>
          <button onClick={this.showModal.bind(this)}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {boards.map((board) => (
          <div
            key={board.id}
            id={`/boards/${board.id}`}
            className="single-board-in-nav"
          >
            <div
              style={{
                backgroundColor: board.bg_color,
                width: "20px",
                height: "20px",
              }}
            ></div>
            <NavLink to={`/boards/${board.id}`}>{board.title}</NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default BoardLeftSideBar;

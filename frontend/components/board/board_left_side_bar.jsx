import React from "react";
import { NavLink } from "react-router-dom";

class BoardLeftSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  closeNav(e) {
    e.preventDefault();
    this.props.changeLeftNavDisplay(false);
  }

  leftNavWidth() {
    if (this.props.showLeftNav) {
      return "250px";
    } else {
      return "0";
    }
  }

  showModal(e) {
    e.preventDefault();
    this.props.openCreateBoard();
  }

  render() {
    const { user, boards } = this.props;
    const leftNavWidth = this.leftNavWidth();
    return (
      <div className="board-left-nav" style={{ width: leftNavWidth }}>
        <a className="closebtn" onClick={this.closeNav.bind(this)}>
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

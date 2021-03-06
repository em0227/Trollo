import React from "react";
import { NavLink } from "react-router-dom";

class BoardLeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.props.showLeftNav(true);
  }

  openNav(e) {
    e.preventDefault();
    this.props.showLeftNav(true);
  }

  collapsedNav() {
    if (this.props.leftNav) {
      return {
        width: "0",
        padding: "0",
      };
    } else {
      return {
        width: "40px",
        padding: "20px 15px 0 10px",
      };
    }
  }

  closeNav(e) {
    e.preventDefault();
    this.props.showLeftNav(false);
  }

  leftNavWidth() {
    if (this.props.leftNav) {
      return "200px";
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
    if (!user.name) return null;
    const leftNavWidth = this.leftNavWidth();
    const collapsedNav = this.collapsedNav();

    return (
      <div className="board-main-2">
        <div
          onClick={this.openNav.bind(this)}
          className="side-bar-collapsed"
          style={collapsedNav}
        >
          <p>{user.name.charAt(0).toUpperCase()}</p>
          <i className="fas fa-chevron-circle-right"></i>
        </div>
        <div className="board-left-nav" style={{ width: leftNavWidth }}>
          <a className="closebtn" onClick={this.closeNav.bind(this)}>
            &times;
          </a>
          <h3 className="leftnavlinks">{user.name}'s Workspace</h3>
          <br />

          <div id={`/users/${user.id}/boards`} className="all-boards">
            <NavLink to={`/users/currentUser/boards`} className="leftnavlinks">
              All Boards
            </NavLink>
            <button onClick={this.showModal.bind(this)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          {boards.map((board) => {
            const icon =
              board.bg_photo !== ""
                ? {
                    backgroundImage: `url(${board.bg_photo})`,
                    backgroundSize: "cover",
                  }
                : {
                    backgroundColor: `${board.bg_color}`,
                  };
            return (
              <div
                key={board.id}
                id={`/boards/${board.id}`}
                className="single-board-in-nav"
              >
                <div className="board-icon" style={icon}></div>
                <NavLink to={`/boards/${board.id}`}>{board.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BoardLeftSideBar;

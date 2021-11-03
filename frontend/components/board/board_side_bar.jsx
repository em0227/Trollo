import React from "react";
import { NavLink } from "react-router-dom";

class BoardSideBar extends React.Component {
  render() {
    const { boards } = this.props;
    return (
      <div className="board-items-nav">
        <ul>
          <li key="all">
            <NavLink to={"/"}>All Boards</NavLink>
          </li>
          {boards.map((board) => (
            <li key={board.id}>
              <NavLink to={`/boards/${board.title}`}>{board.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BoardSideBar;

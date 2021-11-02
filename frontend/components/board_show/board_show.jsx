import React from "react";
import BoardForm from "./board_form";

class BoardShow extends React.Component {
  render() {
    if (!Array.isArray(this.props.boards)) return null;
    if (!this.props.board) {
      return (
        <div className="show-all-boards">
          <h3>All Boards</h3>
          {console.log(this.props.boards)}
          {this.props.boards.map((board) => (
            <div
              key={board.id}
              style={{ backgroundColor: board.bg_color }}
              className="single-board"
            >
              {board.title}
            </div>
          ))}
          <BoardForm />
        </div>
      );
    } else {
      return (
        <div className="show-single-board">
          <h3>You're on this board</h3>
          <p>{this.props.board.title}</p>
        </div>
      );
    }
  }
}

export default BoardShow;

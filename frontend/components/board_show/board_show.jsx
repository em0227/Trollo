import React from "react";
import BoardForm from "./board_form";

class BoardShow extends React.Component {
  render() {
    if (this.props.board === null) {
      return (
        <div className="show-all-boards">
          <h3>All Boards</h3>
          {this.props.boards.map((board) => (
            <div key={board.id} style={`background-color:${board.bg_color}`}>
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

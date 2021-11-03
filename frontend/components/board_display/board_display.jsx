import React from "react";
import BoardForm from "./board_form";
import { Link } from "react-router-dom";

class BoardDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { board, boards } = this.props;
    // weirdly, only onClick works for input submit and not onSubmit
    if (!Array.isArray(boards)) return null;
    if (!board) {
      return (
        <div className="show-all-boards">
          <h3>All Boards</h3>
          {boards.map((board) => (
            <div
              key={board.id}
              style={{ backgroundColor: board.bg_color }}
              className="single-board"
            >
              <Link to={`/users/boards/${board.title}`}>{board.title}</Link>

              <br />
            </div>
          ))}
          <BoardForm createBoard={this.props.createBoard} />
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

export default BoardDisplay;

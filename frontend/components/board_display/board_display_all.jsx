import React from "react";
import BoardForm from "./board_form";
import { Link } from "react-router-dom";

class BoardDisplayAll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { boards } = this.props;
    // weirdly, only onClick works for input submit and not onSubmit
    return (
      <div className="display-all">
        <h3>Your Boards</h3>
        <br />
        <div className="board-list">
          {boards.map((board) => (
            <div
              key={board.id}
              style={{ backgroundColor: board.bg_color }}
              className="single-board"
            >
              <Link to={`/boards/${board.title}`}>{board.title}</Link>

              <br />
            </div>
          ))}
        </div>
        <BoardForm createBoard={this.props.createBoard} />
      </div>
    );
  }
}

export default BoardDisplayAll;

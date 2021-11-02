import React from "react";
import BoardForm from "./board_form";

class BoardDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleDelete(boardId) {
    return (e) => {
      e.preventDefault();
      console.log(e);
      console.log(boardId);
      this.props.deleteBoard(boardId);
    };
  }

  handleUpdate(e) {
    e.preventDefault();
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
              {board.title}
              <br />
              <input
                type="submit"
                value="Update"
                onSubmit={this.handleUpdate}
              />
              <input
                type="submit"
                value="Delete"
                onClick={this.handleDelete(board.id)}
              />
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

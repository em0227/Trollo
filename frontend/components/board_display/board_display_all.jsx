import React from "react";
import BoardForm from "./board_form";
import { Link } from "react-router-dom";

class BoardDisplayAll extends React.Component {
  constructor(props) {
    super(props);
  }

  showModal(e) {
    e.preventDefault();
    this.props.openCreateBoard();
  }

  render() {
    const { user, boards } = this.props;
    // weirdly, only onClick works for input submit and not onSubmit
    const yourBoards = boards.filter((board) => board.author_id === user.id);
    const sharedBoards = boards.filter((board) => board.author_id !== user.id);

    const backgroundStyle = (board) =>
      board.bg_photo !== ""
        ? {
            backgroundImage: `url(${board.bg_photo})`,
            backgroundSize: "cover",
          }
        : {
            backgroundColor: `${board.bg_color}`,
          };

    return (
      <div className="display-all">
        <h3>Your Boards</h3>
        <br />
        <div className="board-list">
          {yourBoards.map((board) => {
            return (
              <Link
                to={`/boards/${board.id}`}

                // onClick={this.openNav.bind(this)}
              >
                <div
                  key={board.id}
                  style={backgroundStyle(board)}
                  className="single-board"
                >
                  <p style={{ filter: "invert(1)" }}>{board.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="create-board" onClick={this.showModal.bind(this)}>
          Create New Board
        </div>

        <div className="shared-boards">
          <h3>Shared Boards</h3>
          <br />
          <div className="board-list">
            {sharedBoards.map((board) => {
              return (
                <Link
                  to={`/boards/${board.id}`}

                  // onClick={this.openNav.bind(this)}
                >
                  <div
                    key={board.id}
                    style={backgroundStyle(board)}
                    className="single-board"
                  >
                    <p style={{ filter: "invert(1)" }}>{board.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BoardDisplayAll;

import React from "react";
import BoardForm from "./board_form";
import { Link } from "react-router-dom";

class BoardDisplayAll extends React.Component {
  constructor(props) {
    super(props);
  }

  openNav() {
    document.querySelector(".board-left-nav").style.width = "250px";
    document.querySelector(".board-main").style.marginLeft = "250px";
    // document.querySelector(".board-nav").style.marginLeft = "250px";
    document.querySelector(".side-bar-collapsed").style.width = "0";
  }

  showImage(board) {
    if (board.photo) {
      return `{{backgroundImage: 'url(${board.photo})'}}`;
    } else {
      return `{{backgroundColor: ${board.bg_color}}}`;
    }
  }

  render() {
    const { boards } = this.props;
    // weirdly, only onClick works for input submit and not onSubmit
    return (
      <div className="display-all">
        <h3>Your Boards</h3>
        <br />
        <div className="board-list">
          {boards.map((board) => {
            if (board.photo) {
              return (
                <div
                  key={board.id}
                  style={{
                    backgroundImage: `url(${board.photo})`,
                    backgroundSize: "150px 100px",
                  }}
                  className="single-board"
                >
                  <Link to={`/boards/${board.title}`} onClick={this.openNav}>
                    {board.title}
                  </Link>

                  <br />
                </div>
              );
            } else {
              return (
                <div
                  key={board.id}
                  style={{ backgroundColor: `${board.bg_color}` }}
                  className="single-board"
                >
                  <Link to={`/boards/${board.title}`} onClick={this.openNav}>
                    {board.title}
                  </Link>

                  <br />
                </div>
              );
            }
          })}
        </div>
        <BoardForm createBoard={this.props.createBoard} />
      </div>
    );
  }
}

export default BoardDisplayAll;

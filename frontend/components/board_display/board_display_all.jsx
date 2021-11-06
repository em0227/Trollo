import React from "react";
import BoardForm from "./board_form";
import { Link } from "react-router-dom";

class BoardDisplayAll extends React.Component {
  constructor(props) {
    super(props);
  }

  // openNav(e) {
  //   // e.preventDefault();
  //   this.props.changeLeftNavDisplay(true);
  // }

  showModal(e) {
    e.preventDefault();
    this.props.openCreateBoard();
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
            const background = board.photo
              ? {
                  backgroundImage: `url(${board.photo})`,
                  backgroundSize: "150px 100px",
                }
              : { backgroundColor: `${board.bg_color}` };
            return (
              <div key={board.id} style={background} className="single-board">
                <Link
                  to={`/boards/${board.id}`}
                  // onClick={this.openNav.bind(this)}
                >
                  {board.title}
                </Link>

                <br />
              </div>
            );
          })}
        </div>
        {/* <BoardForm createBoard={this.props.createBoard} /> */}
        <br />
        <button onClick={this.showModal.bind(this)}>Create New Board</button>
      </div>
    );
  }
}

export default BoardDisplayAll;

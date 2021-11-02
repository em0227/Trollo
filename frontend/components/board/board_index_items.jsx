import React from "react";
import BoardShow from "../board_show/board_show";

class BoardIndexItems extends React.Component {
  render() {
    return (
      <BoardShow
        boards={this.props.boards}
        board={this.props.board}
        createBoard={this.props.createBoard}
      />
    );
  }
}

export default BoardIndexItems;

import React from "react";
import { findBoardByTitle } from "../../reducers/selector";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.board) return null;
    const { bg_color, title, photo } = this.props.board;
    console.log(photo);
    if (photo) {
      return (
        <div
          id="show-single-board"
          style={{ backgroundImage: `url(${photo})` }}
        >
          On {title}
        </div>
      );
    } else {
      return (
        <div id="show-single-board" style={{ backgroundColor: bg_color }}>
          On {title}
        </div>
      );
    }
  }
}

export default BoardDisplayCurrent;

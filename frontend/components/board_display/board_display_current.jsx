import React from "react";
import { findBoardByTitle } from "../../reducers/selector";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.board) return null;
    const { bg_color, title } = this.props.board;
    return (
      <div className="show-single-board" style={{ backgroundColor: bg_color }}>
        On {title}
      </div>
    );
  }
}

export default BoardDisplayCurrent;

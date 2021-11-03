import React from "react";
import { findBoardByTitle } from "../../reducers/selector";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.board) return null;
    return <div>On {this.props.board.title}</div>;
  }
}

export default BoardDisplayCurrent;

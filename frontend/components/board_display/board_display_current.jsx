import React from "react";
import BoardRightSideBar from "./board_right_side_bar";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
    };
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.board);
    console.log(this.props.board);
    if (this.props.board && prevProps.board !== this.props.board) {
      this.setState({
        id: this.props.board.id,
        title: this.props.board.title,
      });
    }
    console.log(this.state);
  }

  submitUpdate(e) {
    e.preventDefault();
    if (this.props.board && this.props.board.title !== this.state.title) {
      this.props.updateBoard(this.state);
    }
  }

  updateBoardTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    if (!this.props.board) return null;
    const { bg_color, photo } = this.props.board;
    // console.log(photo);
    if (photo) {
      return (
        <div
          id="show-single-board"
          style={{ backgroundImage: `url(${photo})` }}
        >
          On
          <input
            type="text"
            value={this.state.title}
            placeholder={this.state.title}
            onChange={this.updateBoardTitle.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
          <br />
          {/* <BoardRightSideBar closeNav={closeNav} /> */}
        </div>
      );
    } else {
      return (
        <div id="show-single-board" style={{ backgroundColor: bg_color }}>
          On
          <input
            type="text"
            placeholder={this.state.title}
            value={this.state.title}
            onChange={this.updateBoardTitle.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
        </div>
      );
    }
  }
}

export default BoardDisplayCurrent;

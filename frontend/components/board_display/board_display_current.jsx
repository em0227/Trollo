import React from "react";
import BoardRightSideBar from "./board_right_side_bar";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
    const { id, title } = this.props.board;
    this.state = {
      id,
      title,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.board !== this.props.board) {
      const { id, title } = this.props.board;
      this.setState({
        id,
        title,
      });
    }
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
    const background = photo
      ? { backgroundImage: `url(${photo})` }
      : { backgroundColor: bg_color };

    return (
      <div id="show-single-board" style={background}>
        <p>
          On{" "}
          <input
            type="text"
            value={this.state.title}
            placeholder={this.state.title}
            onChange={this.updateBoardTitle.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
        </p>

        <BoardRightSideBar
          board={this.props.board}
          updateBoard={this.props.updateBoard}
          deleteBoard={this.props.deleteBoard}
          history= {this.props.history}
        />
      </div>
    );
  }
}

export default BoardDisplayCurrent;
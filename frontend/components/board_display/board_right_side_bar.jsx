import React from "react";

class BoardRightSideBar extends React.Component {
  render() {
    return (
      <div className="board-right-nav">
        <a className="closebtn" onClick={this.props.closeNav}>
          &times;
        </a>
      </div>
    );
  }
}

export default BoardRightSideBar;

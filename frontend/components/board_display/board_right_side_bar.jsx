import React from "react";

class BoardRightSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightNavShow: false,
      board: {
        id: this.props.board.id,
        bg_color: "",
      },
    };
  }

  rightNavWidth() {
    if (this.state.rightNavShow) {
      return "250px";
    } else {
      return "0";
    }
  }

  openNav(e) {
    // e.preventDefault();
    this.setState({ rightNavShow: true });
  }

  closeNav(e) {
    e.preventDefault();
    this.setState({ rightNavShow: false });
  }

  changeColor(e) {
    console.log(this.state);
    this.setState({
      board: {
        id: this.props.board.id,
        bg_color: e.target.value,
      },
    });
  }

  submitChange(e) {
    e.preventDefault();
    console.log(this.state.board);
    console.log(this.state);
    this.props.updateBoard(this.state.board);
  }

  submitDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.board.id);
  }

  render() {
    const rightNavWidth = this.rightNavWidth();
    return (
      <div className="show-right-menu">
        <div className="board-right-nav" style={{ width: rightNavWidth }}>
          <a className="closebtn" onClick={this.closeNav.bind(this)}>
            &times;
          </a>
          <div className="color-buttons">
            <button
              style={{ backgroundColor: "orange" }}
              value="orange"
              onClick={this.changeColor.bind(this)}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "lemonchiffon" }}
              value="lemonchiffon"
              onClick={this.changeColor.bind(this)}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "limegreen" }}
              value="limegreen"
              onClick={this.changeColor.bind(this)}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "lightskyblue" }}
              value="lightskyblue"
              onClick={this.changeColor.bind(this)}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "mediumorchid" }}
              value="mediumorchid"
              onClick={this.changeColor.bind(this)}
              className="color-button"
            ></button>
            <button onClick={this.submitChange.bind(this)}>
              Change Background Color
            </button>
          </div>
          <button onClick={this.submitDelete.bind(this)}>Delete Board</button>
        </div>
        <br />
        <div onClick={this.openNav.bind(this)}>Show Menu</div>
      </div>
    );
  }
}

export default BoardRightSideBar;

import React from "react";
import { Background } from "./bg_selection";
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
      return {
        width: "200px",
        padding: "20px 0 0 20px",
      };
    } else {
      return {
        width: "0",
        opacity: "0",
      };
    }
  }

  collapsedNav() {
    if (this.state.rightNavShow) {
      return {
        width: "0",
        opacity: "0",
      };
    } else {
      return {
        width: "110px",
        padding: "10px 10px 7px 10px",
      };
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
    this.setState({
      board: {
        id: this.props.board.id,
        bg_color: e.target.value,
      },
    });
  }

  submitChange(e) {
    e.preventDefault();
    this.props.updateBoard(this.state.board);
  }

  submitDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.board.id);
    this.props.history.push("/users/currentUser/boards");
    // console.log(this.props);
  }

  render() {
    const rightNavWidth = this.rightNavWidth();
    const collapsedNav = this.collapsedNav();
    return (
      <div className="show-right-menu">
        <div className="board-right-nav" style={rightNavWidth}>
          <a className="closebtn" onClick={this.closeNav.bind(this)}>
            &times;
          </a>
          <br />
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
          </div>
          <br />
          {/* <Background /> */}
          <button onClick={this.submitChange.bind(this)}>
            Change Background
          </button>
          <br />
          <br />
          {this.props.currentUser === this.props.board.author_id ? (
            <button onClick={this.submitDelete.bind(this)}>Delete Board</button>
          ) : (
            ""
          )}
        </div>
        <br />
        <div
          onClick={this.openNav.bind(this)}
          className="side-bar-collapsed-right"
          style={collapsedNav}
        >
          <i className="fas fa-ellipsis-h"></i>
          <span>Show Menu</span>
        </div>
      </div>
    );
  }
}

export default BoardRightSideBar;

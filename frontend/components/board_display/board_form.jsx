import React from "react";
import { Background } from "./bg_selection";

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bg_color: "",
      display: false,
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  handleInput(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  handleCreate(e) {
    e.preventDefault();
    let board = {
      title: this.state.title,
      bg_color: this.state.bg_color,
    };
    this.props.createBoard(board);
    this.setState({
      title: "",
      bg_color: "",
    });
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i} style={{ color: "red" }}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // const createButton =
    //   this.state.display === false ? "Create a New Board" : "Maybe Next Time";
    return (
      <form className="board-form">
        {this.renderErrors()}
        <label>Board Name:</label>

        <input
          type="text"
          onChange={this.handleInput("title")}
          value={this.state.title}
        />

        <label>Choose a Color as Board Background:</label>

        <div className="color-buttons">
          <button
            style={{ backgroundColor: "orange" }}
            value="orange"
            onClick={this.handleInput("bg_color")}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: "lemonchiffon" }}
            value="lemonchiffon"
            onClick={this.handleInput("bg_color")}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: "limegreen" }}
            value="limegreen"
            onClick={this.handleInput("bg_color")}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: "lightskyblue" }}
            value="lightskyblue"
            onClick={this.handleInput("bg_color")}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: "mediumorchid" }}
            value="mediumorchid"
            onClick={this.handleInput("bg_color")}
            className="color-button"
          ></button>
        </div>
        <Background />
        <br />
        <input
          type="submit"
          value="Create board"
          onClick={this.handleCreate}
          style={{ textAlign: "center" }}
        />
      </form>
    );
  }
}

export default BoardForm;

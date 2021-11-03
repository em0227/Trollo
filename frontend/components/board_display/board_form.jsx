import React from "react";

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bg_color: "",
      display: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  toggleForm() {
    this.setState({ display: !this.state.display });
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
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
      display: false,
    });
  }

  showForm() {
    if (this.state.display)
      return (
        <form className="board-form">
          <label>Title:</label>
          <input
            type="text"
            onChange={this.handleInput("title")}
            value={this.state.title}
          />
          <br />
          <label className="color-buttons">
            Choose Board Color:
            <button
              style={{ backgroundColor: "orange" }}
              value="orange"
              onClick={this.handleInput("bg_color")}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "yellow" }}
              value="yellow"
              onClick={this.handleInput("bg_color")}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "green" }}
              value="green"
              onClick={this.handleInput("bg_color")}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "blue" }}
              value="blue"
              onClick={this.handleInput("bg_color")}
              className="color-button"
            ></button>
            <button
              style={{ backgroundColor: "velvet" }}
              value="velvet"
              onClick={this.handleInput("bg_color")}
              className="color-button"
            ></button>
          </label>
          <input
            type="submit"
            value="Create!"
            onClick={this.handleCreate}
            style={{ border: "1px black solid" }}
          />
        </form>
      );
  }

  render() {
    const createButton =
      this.state.display === false ? "Create a New Board" : "Maybe Next Time";
    return (
      <div className="board-create-new">
        <br />
        {this.showForm()}
        <button onClick={this.toggleForm}>{createButton}</button>
      </div>
    );
  }
}

export default BoardForm;

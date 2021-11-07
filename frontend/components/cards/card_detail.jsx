import React from "react";

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    let { list_id, id, title, description } = this.props.card;
    if (description === null) {
      description = "";
    }
    this.state = {
      title,
      description,
      id,
      list_id,
    };
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  submitUpdate(e) {
    this.props.updateCard(this.state);
  }
  render() {
    return (
      <div className="card-detail-container">
        <div className="card-detail-text">
          <input
            type="text"
            placeholder={this.state.title}
            value={this.state.title}
            onChange={this.handleInput("title")}
            onBlur={this.submitUpdate.bind(this)}
          />
          <p>in list {this.props.listTitle}</p>
          <h4>Description</h4>
          <textarea
            cols="30"
            rows="10"
            placeholder={this.state.description}
            value={this.state.description}
            onChange={this.handleInput("description")}
            onBlur={this.submitUpdate.bind(this)}
          ></textarea>
        </div>

        <div className="card-detail-controls">
          <button onClick={this.submitUpdate.bind(this)}>update card</button>
          <button>add checklist</button>
          <button>add attachment</button>
          <button>add due date</button>
        </div>
      </div>
    );
  }
}

export default CardDetail;

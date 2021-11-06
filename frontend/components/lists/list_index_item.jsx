import React from "react";

class ListIndexItem extends React.Component {
  constructor(props) {
    console.log("in list item constructor");
    super(props);
    const { id, title, board_id } = this.props.list;
    this.state = {
      id,
      title,
      board_id,
    };
  }

  handleDelete(listId) {
    return (e) => this.props.deleteList(listId);
  }

  updateListTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  submitUpdate() {
    this.props.updateList(this.state);
  }

  render() {
    console.log("in list item render");
    console.log(this.props.list);
    const { id } = this.props.list;
    return (
      <div key={id} className="list">
        <input
          type="text"
          value={this.state.title}
          //   placeholder={this.state.title}
          onChange={this.updateListTitle.bind(this)}
          onBlur={this.submitUpdate.bind(this)}
        />
        <p onClick={this.handleDelete(id)}>delete</p>
      </div>
    );
  }
}

export default ListIndexItem;

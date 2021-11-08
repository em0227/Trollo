import React from "react";
import CardsIndexContainer from "../cards/card_index_container";

class ListIndexItem extends React.Component {
  constructor(props) {
    // console.log("in list item constructor");
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

  dragStart(e) {
    // debugger;
    e.target.classList.add("dragging-list");
    // e.target.dataTransfer.setData("text/html");
  }

  dragEnd(e) {
    e.target.classList.remove("dragging-list");
  }

  render() {
    // console.log("in list item render");
    // console.log(this.props.list);
    const { id } = this.props.list;
    return (
      <div
        key={id}
        className="list"
        draggable="true"
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        id={id}
      >
        <div className="list-control">
          <input
            type="text"
            id="list-title-input"
            value={this.state.title}
            //   placeholder={this.state.title}
            onChange={this.updateListTitle.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
          <button onClick={this.handleDelete(id)}>delete</button>
        </div>
        <CardsIndexContainer
          list={this.props.list}
          boardId={this.props.list.board_id}
        />
      </div>
    );
  }
}

export default ListIndexItem;

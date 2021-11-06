import React from "react";
import ListIndexItem from "./list_index_item";

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        title: "",
        board_id: this.props.board.id,
      },
      showForm: false,
    };
  }
  componentDidMount() {
    this.props.fetchAllLists(this.props.board.id);
  }
  componentDidUpdate(prevProps) {
    console.log("in list index did update");
    console.log(this.props);
    if (prevProps.board !== this.props.board) {
      this.props.fetchAllLists(this.props.board.id);
      this.setState({
        list: {
          title: "",
          board_id: this.props.board.id,
        },
      });
    }
  }

  createList(e) {
    this.props.createList(this.state.list);
  }

  handleInput() {
    return (e) => {
      this.setState({
        list: {
          title: e.target.value,
          board_id: this.props.board.id,
        },
      });
    };
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    console.log("in list index render");
    let listNav = this.state.showForm ? (
      <div className="add-list-nav">
        <input
          type="text"
          onChange={this.handleInput()}
          value={this.state.list.title}
        />
        <div className="controls">
          <button onClick={this.createList.bind(this)}>Add List</button>
          <a className="closebtn" onClick={this.toggleForm.bind(this)}>
            &times;
          </a>
        </div>
      </div>
    ) : (
      <div
        className="add-list-nav-collapsed"
        onClick={this.toggleForm.bind(this)}
      >
        <i className="fas fa-plus"></i>

        <p>Add New List</p>
      </div>
    );

    const { updateList, deleteList } = this.props;

    return (
      <div className="lists">
        {listNav}
        {this.props.lists.map((list) => (
          <div>
            <img
              src={window.images.trollHair}
              alt="troll-hair"
              style={{ width: "340px" }}
            />
            <ListIndexItem
              key={list.id}
              list={list}
              updateList={updateList}
              deleteList={deleteList}
            />
            <img
              src={window.images.troll}
              alt="troll"
              style={{ width: "300px" }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ListIndex;

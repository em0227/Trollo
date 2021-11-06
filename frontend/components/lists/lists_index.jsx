import React from "react";

class ListIndex extends React.Component {
  render() {
    return (
      <div className="lists">
        <p>Add New List</p>
        {this.props.lists.map((list) => (
          <div key={list.id} className="list">
            <p>{list.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ListIndex;

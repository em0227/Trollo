import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    // console.log("in list item constructor");
    super(props);
    const { id, body, card_id } = this.props.list;
    this.state = {
      id,
      body,
      card_id,
    };
  }

  handleDelete(commentId) {
    return (e) => this.props.deleteComment(commentId);
  }

  updateCommentBody(e) {
    this.setState({
      body: e.target.value,
    });
  }

  submitUpdate() {
    this.props.updateComment(this.state);
  }

  render() {
    // console.log("in list item render");
    // console.log(this.props.list);
    const { id } = this.props.comment;
    return (
      <div key={id} className="comment" id={id}>
        <div className="comment-control">
          <input
            type="text"
            id="comment-body-input"
            value={this.state.body}
            //   placeholder={this.state.title}
            onChange={this.updateCommentBody.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
          <button onClick={this.handleDelete(id)}>delete</button>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;

import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    // console.log("in list item constructor");
    super(props);
    const { id, body, card_id } = this.props.comment;
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
    const { id, author_id } = this.props.comment;
    // const author = this.props.coworkers[author_id];
    return (
      <div key={id} className="comment" id={id}>
        <div className="comment-detail">
          <div>
            <p className="profile-image">
              {author_id}
              {/* {author.name.charAt(0).toUpperCase()} */}
            </p>
          </div>
          <input
            type="text"
            id="comment-body-input"
            value={this.state.body}
            placeholder={this.state.body}
            onChange={this.updateCommentBody.bind(this)}
            onBlur={this.submitUpdate.bind(this)}
          />
          <div className="comment-control">
            <button>edit</button>
            <button onClick={this.handleDelete(id)}>delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;

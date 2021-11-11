import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        body: "",
        card_id: this.props.card.id,
      },
      showForm: false,
    };
  }
  componentDidMount() {
    this.props.fetchAllComments(this.props.card.id);
  }
  componentDidUpdate(prevProps) {
    // console.log("in comment index did update");
    // console.log(this.props);
    if (prevProps.card !== this.props.card) {
      this.props.fetchAllComments(this.props.card.id);
      this.setState({
        comment: {
          body: "",
          card_id: this.props.card.id,
        },
      });
    }
  }

  createComment(e) {
    this.props.createComment(this.state.comment);
  }

  handleInput() {
    return (e) => {
      this.setState({
        comment: {
          body: e.target.value,
          card_id: this.props.card.id,
        },
      });
    };
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    // console.log("in comment index render");
    let commentNav = this.state.showForm ? (
      <div className="add-comment-nav">
        <input
          type="text"
          onChange={this.handleInput()}
          value={this.state.comment.body}
          placeholder="write a comment"
        />
        <div className="controls">
          <button onClick={this.createComment.bind(this)}>Add Comment</button>
        </div>
      </div>
    ) : (
      <div
        className="add-comment-nav-collapsed"
        onClick={this.toggleForm.bind(this)}
      >
        <p>Add New Comment</p>
      </div>
    );

    const { updateComment, deleteComment } = this.props;

    return (
      <div className="comments">
        {commentNav}
        {this.props.comments.map((comment) => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    );
  }
}

export default CommentIndex;

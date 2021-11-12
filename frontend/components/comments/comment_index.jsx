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
    // console.log("in comment did mout");
    // console.log(this.props.ownProps);
    // console.log(this.props);
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
    this.setState({
      comment: {
        body: "",
        card_id: this.props.card.id,
      },
    });
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
    const { updateComment, deleteComment } = this.props;
    return (
      <div className="comments">
        <div className="titles">
          <i className="fas fa-comment-dots"></i>
          <input
            type="text"
            onChange={this.handleInput()}
            value={this.state.comment.body}
            placeholder="write a comment"
          />
        </div>
        <div className="controls">
          <button onClick={this.createComment.bind(this)}>Save</button>
        </div>
        <div className="comments">
          {this.props.comments.map((comment) => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              // coworkers={coworkers}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CommentIndex;

import {
  fetchAllComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  card: ownProps.board,
  comments: Object.values(state.entities.comments),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllComments: (cardId) => dispatch(fetchAllComments(cardId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);

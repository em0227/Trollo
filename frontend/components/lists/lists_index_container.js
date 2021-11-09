import ListIndex from "./lists_index";
import { connect } from "react-redux";
import {
  fetchAllLists,
  createList,
  updateList,
  deleteList,
} from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => ({
  board: ownProps.board,
  lists: Object.values(state.entities.lists),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllLists: (boardId) => dispatch(fetchAllLists(boardId)),
  createList: (list) => dispatch(createList(list)),
  updateList: (list) => dispatch(updateList(list)),
  deleteList: (listId) => dispatch(deleteList(listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);

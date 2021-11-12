import React from "react";
import BoardRightSideBar from "./board_right_side_bar";
import ListIndexContainer from "../lists/lists_index_container";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        id: "",
        title: "",
      },
      showInviteForm: false,
      search: "",
      selected: null,
    };
  }

  componentDidMount() {
    // console.log("in display did mount");
    // this.props.fetchAllLists(this.props.board.id);
    this.props.fetchBoard(this.props.match.params.boardId);
    if (this.props.board) {
      const { id, title } = this.props.board;
      this.setState({
        id,
        title,
      });
    }
  }

  componentDidUpdate(prevProps) {
    // console.log("in display did update");

    if (prevProps.board !== this.props.board) {
      const { id, title } = this.props.board;
      this.setState({
        board: {
          id,
          title,
        },
      });
    }
  }

  submitUpdate(e) {
    e.preventDefault();
    if (this.props.board && this.props.board.title !== this.state.board.title) {
      this.props.updateBoard(this.state.board);
    }
  }

  updateBoardTitle(e) {
    this.setState({
      board: {
        id: this.props.board.id,
        title: e.target.value,
      },
    });
  }

  invite() {
    this.setState({ showInviteForm: !this.state.showInviteForm });
  }

  inviteForm() {
    const result =
      this.props.searchResults.length === 0 ? (
        <div className="user-result">
          <p>No Results</p>
        </div>
      ) : (
        this.props.searchResults.map((result) => {
          return (
            <div
              className="user-result"
              onClick={this.selectUser.bind(this)}
              key={result.id}
              id={result.id}
            >
              <p>{result.name}</p>
              <p>{result.email}</p>
            </div>
          );
        })
      );

    if (this.state.showInviteForm) {
      return (
        <div className="invite-form">
          <a
            className="closebtn"
            onClick={this.invite.bind(this)}
            style={{ alignSelf: "flex-end" }}
          >
            &times;
          </a>
          <h3>Invite to board</h3>
          <input
            type="search"
            placeholder="Email address or name"
            onChange={this.handleSearch.bind(this)}
            value={this.state.search}
          />
          {result}
          <button onClick={this.sendInvite.bind(this)}>Send Invitation</button>
        </div>
      );
    }
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value,
    });
    this.debounce();
  }

  debounce() {
    let { timerId, search } = this.state;
    const { matchedUsers } = this.props;

    clearTimeout(timerId);
    timerId = setTimeout(() => matchedUsers(search), 200);
    this.setState({ timerId });
  }

  selectUser(e) {
    // debugger;
    if (this.state.selected === e.currentTarget.id) {
      this.setState({ selected: "" });
    } else {
      this.setState({ selected: e.currentTarget.id });
    }

    if (e.currentTarget.classList.value.includes("selected")) {
      e.currentTarget.classList.remove("selected");
      return null;
    } else {
      if (document.querySelector(".selected")) {
        document.querySelector(".selected").classList.remove("selected");
      }
      e.currentTarget.classList.add("selected");
    }

    // debugger;
  }

  sendInvite(e) {
    this.props.shareBoard(this.props.board.id, this.state.selected);
  }

  render() {
    if (!this.props.board) return null;
    const { bg_color, photo } = this.props.board;
    const background = photo
      ? { backgroundImage: `url(${photo})` }
      : { backgroundColor: bg_color };

    return (
      <div id="show-single-board" style={background}>
        <div className="display-menu">
          <p>
            On{" "}
            <input
              type="text"
              id="board-title-input"
              value={this.state.board.title}
              placeholder={this.state.board.title}
              onChange={this.updateBoardTitle.bind(this)}
              onBlur={this.submitUpdate.bind(this)}
            />
          </p>

          <div className="co-workers">
            <div className="whos-on-board">{this.props.owner}</div>
            {this.props.board.sharedCoworkers.map((coWorker) => (
              <div key={coWorker.id} className="whos-on-board">
                {coWorker.name}
              </div>
            ))}
          </div>

          <div className="invite-container">
            <div className="invite" onClick={this.invite.bind(this)}>
              <i className="fas fa-user-plus"></i>
              <button>Invite</button>
            </div>

            {this.inviteForm()}
          </div>

          <BoardRightSideBar
            board={this.props.board}
            updateBoard={this.props.updateBoard}
            deleteBoard={this.props.deleteBoard}
            history={this.props.history}
          />
        </div>

        <ListIndexContainer board={this.props.board} />
      </div>
    );
  }
}

export default BoardDisplayCurrent;

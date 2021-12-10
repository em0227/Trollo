import React from "react";
import BoardRightSideBar from "./board_right_side_bar";
import ListIndexContainer from "../lists/lists_index_container";
import MemberInfo from "./member_item";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        id: "",
        title: "",
        bg_photo: this.props.background,
      },
      showInviteForm: false,
      search: "",
      selected: null,
      searchResults: this.props.searchResults,
      timerId: "",
    };
  }

  componentDidMount() {
    // console.log("in display did mount");
    // this.props.fetchAllLists(this.props.board.id);
    // if (true) {
    //   console.log("fetching board");
    //   console.log(this.props.loading);
    this.props.fetchBoard(this.props.match.params.boardId);
    // }
    //
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

    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
      this.props.fetchBoard(this.props.match.params.boardId);
    }

    if (prevProps.board !== this.props.board) {
      const { id, title } = this.props.board;
      this.setState({
        board: {
          id,
          title,
        },
      });
    }

    if (prevProps.searchResults !== this.props.searchResults) {
      this.setState({
        searchResults: this.props.searchResults,
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
    this.setState({
      showInviteForm: !this.state.showInviteForm,
      search: "",
      selected: null,
      searchResults: [],
    });
    // debugger;
  }

  inviteForm() {
    const result =
      this.state.searchResults.length === 0 ? (
        <div style={{ width: "100%", marginTop: "10px" }}>
          <p>No Results</p>
        </div>
      ) : (
        this.state.searchResults.map((result) => {
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
          <div className="invite-form-top">
            <h3>Invite to board</h3>
            <a className="closebtn" onClick={this.invite.bind(this)}>
              &times;
            </a>
          </div>

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
    this.setState(
      {
        search: e.target.value,
        searchResults: this.props.searchResults,
      },
      () => this.debounce()
    );
    // this.debounce();
  }

  debounce() {
    let { timerId, search } = this.state;
    if (search === "") {
      clearTimeout(timerId);
      this.setState({
        searchResults: [],
      });
    } else {
      const { matchedUsers } = this.props;

      clearTimeout(timerId);
      timerId = setTimeout(() => matchedUsers(search), 200);
      this.setState({ timerId });
    }
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
    if (!this.props.board.owner) return null;
    const { bg_color, photo, bg_photo } = this.props.board;
    const { deleteBoard, history, board, unshareBoard } = this.props;
    let background;
    if (photo) {
      background = { backgroundImage: `url(${photo})` };
    } else if (bg_photo) {
      background = {
        backgroundImage: `url(${bg_photo}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    } else {
      background = { backgroundColor: bg_color };
    }

    if (this.props.loading) {
      return (
        <div className="board" style={{ zIndex: "10" }}>
          {" "}
          <Loading />{" "}
        </div>
      );
    }

    return (
      <div className="show-single-board" style={background}>
        <div className="display-menu">
          <p>
            On{" "}
            <input
              type="text"
              id="board-title-input"
              className="font-changing"
              value={this.state.board.title}
              placeholder={this.state.board.title}
              onChange={this.updateBoardTitle.bind(this)}
              onBlur={this.submitUpdate.bind(this)}
            />
          </p>

          <div className="co-workers">
            <MemberInfo
              owner={this.props.board.owner}
              deleteBoard={deleteBoard}
              history={history}
              board={board}
            />

            {this.props.board.sharedCoworkers.map((coworker) => (
              <MemberInfo
                coworker={coworker}
                key={coworker.id}
                unshareBoard={unshareBoard}
                history={history}
                board={board}
              />
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
            currentUser={this.props.currentUser}
          />
        </div>

        <ListIndexContainer board={this.props.board} />
      </div>
    );
  }
}

export default BoardDisplayCurrent;

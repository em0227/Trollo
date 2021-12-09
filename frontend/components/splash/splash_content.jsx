import React from "react";
import { Link } from "react-router-dom";

class SplashContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      this.changeBackground();
    });
  }

  handleInput(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addEmail(this.state.email);
    this.props.history.push("/signup");
  }

  changeBackground(e) {
    const nav = document.getElementById("nav");
    if (nav && document.documentElement.scrollTop > 50) {
      nav.classList.add("scroll");
    } else if (nav) {
      nav.classList.remove("scroll");
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="splash">
        <nav className="splash-nav" id="nav">
          <img src={window.images.purpleLogo} alt="trollo-logo" />
          <div className="links">
            <div className="contact">
              <a target="_blank" href="https://github.com/em0227">
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/emilyawu/">
                <i
                  className="fa fa-linkedin-square"
                  aria-hidden="true"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </div>
            <div className="auth">
              <Link to="/login" className="login">
                Login
              </Link>
              <br />
              <Link to="/signup" className="signup">
                Sign up
              </Link>
            </div>
          </div>
        </nav>

        <div className="top container">
          <div className="container-text">
            <h1>Trollo helps teams move work forward.</h1>
            <br />
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trollo.
            </p>
            <br />

            <input
              type="email"
              placeholder="  Email"
              className="email"
              onChange={this.handleInput}
              value={this.state.email}
            />
            <br />
            <input
              type="submit"
              value="Sign up - it's free"
              className="splash-sign-up2"
              onClick={this.handleSubmit}
            />
          </div>
          <img src={window.images.openingImg} alt="teamwork" />
        </div>
        <div className="container second">
          <h1>It’s more than work. It’s a way of working together.</h1>
          <br />
          <p>
            Start with a Trollo board, lists, and cards. Customize and expand
            with more features as your teamwork grows. Manage projects, organize
            tasks, and build team spirit—all in one place.
          </p>
          <br />
          <img src={window.images.mainBoard} alt="mainboard-showcase" />
        </div>
        <div className="container third">
          <img src={window.images.board} alt="board-showcase" />
          <div>
            <h1>The board is just the beginning</h1>
            <br />
            <p>
              Lists and cards are the building blocks of organizing work on a
              Trollo board. Grow from there with task assignments, timelines,
              productivity metrics, calendars, and more.
            </p>
          </div>
          <br />
        </div>
        <div className="container fourth">
          <div>
            <h1>Cards contain everything you need</h1>
            <br />
            <p>
              Trello cards are your portal to more organized work—where every
              single part of your task can be managed, tracked, and shared with
              teammates. Open any card to uncover an ecosystem of checklists,
              due dates, attachments, conversations, and more.
            </p>
          </div>
          <img src={window.images.card} alt="card-showcase" />
        </div>
        <div className="container fifth">
          <div className="sign-up-box-at-bottom">
            <p>
              Sign up and get started with Trollo today. A world of productive
              teamwork awaits!
            </p>
            <div className="bottom-email-container">
              <input
                type="email"
                placeholder="  Email"
                className="email"
                onChange={this.handleInput}
                value={this.state.email}
              />
              <br />
              <input
                type="submit"
                value="Sign up"
                className="splash-sign-up3"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </div>
        <footer>
          <img src={window.images.purpleLogo} alt="trollo-logo" />
          <p>A Trello Clone by Emily Wu</p>
          <a target="_blank" href="https://github.com/em0227">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/emilyawu/">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default SplashContent;

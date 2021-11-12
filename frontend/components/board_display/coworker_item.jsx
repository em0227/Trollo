import React from "react";

class Coworker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    };
  }

  toggleDetail(e) {
    e.stopPropagation();
    this.setState({
      showDetail: !this.state.showDetail,
    });
  }

  detail() {
    if (this.state.showDetail) {
      return (
        <div className="coworker-detail">
          <p>Permission: Normal</p>
        </div>
      );
    }
  }

  render() {
    const { coworker } = this.props;
    return (
      <div className="whos-on-board">
        <p>{coworker.name}</p>
        {detail()}
      </div>
    );
  }
}

export default Coworker;

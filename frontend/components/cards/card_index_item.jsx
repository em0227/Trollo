import React from "react";

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardDetail: false,
    };
    // this.cardRef = React.createRef();
  }
  toggleDetail() {
    this.setState({
      showCardDetail: !this.state.showCardDetail,
    });
  }
  cardDetail() {
    if (this.state.showCardDetail) {
      return (
        <div className="card-detail-menu">
          <button>Edit Card</button>
          <button>Delete Card</button>
          <a className="closebtn" onClick={this.toggleDetail.bind(this)}>
            &times;
          </a>
        </div>
      );
    }
  }

  dragStart(e) {
    // debugger;
    e.target.classList.add("dragging");
    // e.target.dataTransfer.setData("text/html");
  }

  dragEnd(e) {
    e.target.classList.remove("dragging");
  }

  render() {
    const card = this.props.card;
    return (
      <div
        className="card draggables"
        draggable="true"
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        id={card.id}
        ref={this.cardRef}
      >
        <p>{card.title}</p>
        <i className="fas fa-ellipsis-h" onClick={this.toggleDetail.bind(this)}>
          {this.cardDetail()}
        </i>
      </div>
    );
  }
}

export default CardIndexItem;

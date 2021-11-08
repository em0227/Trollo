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

  openCardDetail() {
    // debugger;
    let cardId = this.props.card.id;
    this.props.openCard(cardId);
  }
  cardDetail() {
    if (this.state.showCardDetail) {
      return (
        <div className="card-detail-menu">
          <button onClick={this.openCardDetail.bind(this)}>Edit Card</button>
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
    e.target.classList.add("dragging-card");
    // e.target.dataTransfer.setData("text/html");
  }

  dragEnd(e) {
    e.target.classList.remove("dragging-card");
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

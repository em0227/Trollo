import React from "react";

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardDetail: false,
    };
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
  render() {
    const card = this.props.card;
    return (
      <div className="card" key={card.id}>
        <p>{card.title}</p>
        <i className="fas fa-ellipsis-h" onClick={this.toggleDetail.bind(this)}>
          {this.cardDetail()}
        </i>
      </div>
    );
  }
}

export default CardIndexItem;

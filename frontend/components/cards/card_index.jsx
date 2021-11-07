import React from "react";

class CardsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllCards(this.props.boardId);
  }
  render() {
    console.log("in card index render");
    return (
      <div className="cards">
        {this.props.cards.map((card) => (
          <div>
            <p>{card.title}</p>
            <p>Add New Card</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardsIndex;

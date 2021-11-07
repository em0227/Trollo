import React from "react";
import CardIndexItem from "./card_index_item";

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        title: "",
      },
      showCardForm: false,
    };
    // this.cardRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchAllCards(this.props.boardId);
  }

  createCard(e) {
    let card = {
      title: this.state.card.title,
      list_id: this.props.list.id,
    };
    this.props.createCard(card);
    this.setState({
      card: {
        title: "",
      },
    });
  }

  handleInput() {
    return (e) => {
      this.setState({
        card: {
          title: e.target.value,
        },
      });
    };
  }

  toggleForm() {
    this.setState({ showCardForm: !this.state.showCardForm });
  }

  dragOver(e) {
    // debugger;
    e.preventDefault();
  }

  drop(e) {
    // debugger;
    let dragged = document.querySelector(".dragging");
    if (e.currentTarget.classList.value.includes("draggable-container")) {
      let movedCardId = parseInt(dragged.id);
      this.props.updateCard({ id: movedCardId, list_id: this.props.list.id });
      dragged.classList.remove("dragging");
    }
    //was using appendChild and removeChild and was causing DOM Exception issue.
  }

  render() {
    console.log("in card index render");
    let cardNav = this.state.showCardForm ? (
      <div className="add-card-nav">
        <input
          type="text"
          onChange={this.handleInput()}
          value={this.state.card.title}
          placeholder="card title"
        />
        <div className="controls">
          <button onClick={this.createCard.bind(this)}>Add Card</button>
          <a className="closebtn" onClick={this.toggleForm.bind(this)}>
            &times;
          </a>
        </div>
      </div>
    ) : (
      <div
        className="add-card-nav-collapsed"
        onClick={this.toggleForm.bind(this)}
      >
        <i className="fas fa-plus"></i>

        <button>Add New Card</button>
      </div>
    );

    return (
      <div>
        <div
          className="cards draggable-container"
          onDragOver={this.dragOver}
          onDrop={this.drop.bind(this)}
        >
          {this.props.cards.map((card) => (
            <CardIndexItem key={card.id} card={card} openCard={this.props.openCard}/>
          ))}
        </div>
        {cardNav}
      </div>
    );
  }
}

export default CardsIndex;

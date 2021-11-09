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

  drop(e) {
    // console.log("in item drag over");
    // console.log(this.cardRef.current);
    // console.log(e.target);
    // console.log(e.currentTarget);
    let dragged = document.querySelector(".dragging-card");
    // let container = this.cardRef.current.parentElement;
    let container = e.currentTarget.parentElement;
    // debugger;
    const afterElement = this.getDragAfterElement(container, e.clientY);
    // debugger;
    if (afterElement === undefined) {
      // debugger;
      // container.removeChild(dragged);
      container.append(dragged);
      dragged.classList.remove("dragging-card");
      dragged.classList.remove("dragging-list");
      // debugger;
    } else {
      // debugger;
      // container.removeChild(dragged);
      // container.insertBefore(dragged, afterElement);
      dragged.classList.remove("dragging-card");
      dragged.classList.remove("dragging-list");
      afterElement.insertAdjacentElement("beforebegin", dragged);
      // debugger;
    }
  }

  getDragAfterElement(container, y) {
    let cardsInList = [];
    for (let i = 0; i < container.children.length; i++) {
      if (!container.children[i].classList.value.includes("dragging-card")) {
        cardsInList.push(container.children[i]);
      }
    }
    // debugger;
    return cardsInList.reduce(
      (closet, child) => {
        // debugger;
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closet.offset) {
          return { offset: offset, element: child };
        } else {
          return closet;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  dragEnd(e) {
    e.target.classList.remove("dragging-card");
  }

  showCover() {
    if (!this.props.card) return null;
    const { image } = this.props.card;
    // debugger;
    if (image.length > 0) {
      return (
        <div draggable="false">
          <img src={image[0].imageUrl} alt="card-cover" />
        </div>
      );
    }
  }

  render() {
    const card = this.props.card;
    // console.log(this.cardRef.current);
    return (
      <div
        className="card draggables"
        draggable="true"
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        onDrop={this.drop.bind(this)}
        id={card.id}
      >
        <div>
          <div className="card-title-info">
            <p>{card.title}</p>
            <i
              className="fas fa-ellipsis-h"
              onClick={this.toggleDetail.bind(this)}
            >
              {this.cardDetail()}
            </i>
          </div>

          {this.showCover()}
        </div>
      </div>
    );
  }
}

export default CardIndexItem;

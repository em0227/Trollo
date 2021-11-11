import React from "react";
import CommentIndexContainer from '../comments/comment_index_container'

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    let { list_id, id, title, description } = this.props.card;
    if (description === null) {
      description = "";
    }

    this.state = {
      title,
      description,
      id,
      list_id,
      images: [],
    };
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  //   handleFile(e) {
  // debugger;
  // const file = e.currentTarget.files[0];
  // const fileReader = new FileReader();
  // fileReader.onloadend = () => {
  //   this.setState({
  //     images: this.state.images.push(file),
  //     imageUrl: fileReader.result,
  //   });
  // };
  // if (file) {
  //   fileReader.readAsDataURL(file);
  // }
  //   }

  submitUpdate(e) {
    // debugger;
    e.preventDefault();
    const { title, description, id, list_id, images } = this.state;
    const formData = new FormData();

    formData.append("card[title]", title);
    formData.append("card[description]", description);
    formData.append("card[list_id]", list_id);

    for (let i = 0; i < images.length; i++) {
      formData.append("card[images][]", images[i]);
    }
    // debugger;
    this.props.updateCardWithForm(formData, id);
    this.props.openCard(id);
  }

  deleteAttachment(imageId) {
    const cardId = this.props.card.id;
    return (e) => {
      this.props.deleteAttachment(cardId, imageId);
    };
  }

  expendImg(e) {
    // debugger;
    if (e.target.classList.value.includes("large-img")) {
      e.target.classList.remove("large-img");
      e.target.parentElement.classList.remove("show");
      e.target.parentElement.parentElement.classList.remove("show");
    } else {
      e.target.classList.add("large-img");
      e.target.parentElement.classList.add("show");
      e.target.parentElement.parentElement.classList.add("show");
    }
  }

  addCheckBoxText() {
    //this.setState
  }

  submitCheckList() {
    //create checklist
  }

  addCheckBox() {
    return (
      <div>
        <input type="checkbox" />
        {/* {need to add value to the checkbox too} */}
        <input
          type="text"
          onChange={this.addCheckBoxText.bind(this)}
          onBlur={this.submitCheckList}
        />
      </div>
    );
  }

  render() {
    // debugger;
    const attachments = this.props.card.image
      ? this.props.card.image.map((image, i) => (
          <div className="modal-image">
            <div className="modal-iamge-child">
              <button onClick={this.deleteAttachment(image.imageId)}>
                delete this
              </button>
              <img
                key={i}
                src={image.imageUrl}
                alt="image"
                onClick={this.expendImg.bind(this)}
              />
            </div>
          </div>
        ))
      : null;
    // debugger;
    return (
      <div className="card-detail-container">
        <div className="card-detail-text">
          <input
            type="text"
            placeholder={this.state.title}
            value={this.state.title}
            onChange={this.handleInput("title")}
            onBlur={this.submitUpdate.bind(this)}
          />
          <p>in list {this.props.listTitle}</p>
          <h4>Description</h4>
          <textarea
            cols="30"
            rows="10"
            placeholder={this.state.description}
            value={this.state.description}
            onChange={this.handleInput("description")}
            onBlur={this.submitUpdate.bind(this)}
          ></textarea>
          {/* {this.checkboxs} */}

          <p>attachments</p>
          <div>{attachments}</div>
          <CommentIndexContainer card={this.props.card}/>
        </div>

        <div className="card-detail-controls">
          <button onClick={this.addCheckBox}>add checklist</button>

          <div>
            <label htmlFor="files">add image attachment</label>
            <input
              id="files"
              name="files"
              type="file"
              accept=".jpg, .jpeg, .png"
              //   style={{ opacity: 0 }}
              onChange={(e) => this.setState({ images: e.target.files })}
              multiple
            />
          </div>
          <button onClick={this.submitUpdate.bind(this)}>update card</button>

          <label htmlFor="due-date">Due Date:</label>
          <input type="date" id="due-date" />
        </div>
      </div>
    );
  }
}

export default CardDetail;

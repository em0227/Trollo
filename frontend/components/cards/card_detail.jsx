import React from "react";

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

  deleteAttachment(imageUrl) {
    // e.preventDefault();
    // const { imagesUrl } = this.props.card;
    // const formData = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formData.append("card[images][]", images[i]);
    // }
    // use purge
    // may need to set up a attachment delete route
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

  render() {
    const attachments = this.props.card.imageUrls
      ? this.props.card.imageUrls.map((imageUrl, i) => (
          <div className="modal-image">
            <div className="modal-iamge-child">
              <a className="closebtn" onClick={this.deleteAttachment}>
                &times;
              </a>
              <img
                key={i}
                src={imageUrl}
                alt="image"
                onClick={this.expendImg.bind(this)}
              />
            </div>
          </div>
        ))
      : null;

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
          <p>attachments</p>
          <div>{attachments}</div>
        </div>

        <div className="card-detail-controls">
          <button>add checklist</button>

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

          <button>add due date</button>
        </div>
      </div>
    );
  }
}

export default CardDetail;

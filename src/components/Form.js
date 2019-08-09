import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import uuid from "uuid/v1";
import RedButton from "./RedButton";
import Number from "./Number";
import { FormContainer, StyledUpload, StepContainer } from "./FormContainer";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function Form({ onCreate, history }) {
  const [image, setImage] = React.useState("");

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  const [newCard, setnewCard] = React.useState({
    _id: "",
    name: "",
    type: "",
    fabricLength: "",
    fabricWidth: "",
    fabricColor: "",
    price: "",
    source: "",
    bookmark: false,
    dis: false
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setnewCard({
      ...newCard,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      _id: uuid(),
      name: newCard.name,
      type: newCard.type ? newCard.type : "no type",
      fabricLength: newCard.fabricLength,
      fabricWidth: newCard.fabricWidth ? newCard.fabricWidth : "no width",
      fabricColor: newCard.fabricColor ? newCard.fabricColor : "no color",
      price: newCard.price,
      source: image ? image : "../../images/default-img.png",
      bookmark: false,
      dis: false
    };
    onCreate(item);
    history.replace(`/details/${item._id}`);
  }

  return (
    <>
      <StepContainer>
        <Number>1</Number>
        <h2>Upload Image</h2>
        <StyledUpload>
          {image ? (
            <img src={image} alt="" style={{ width: "30%" }} />
          ) : (
            <input type="file" name="file" onChange={upload} />
          )}
        </StyledUpload>
      </StepContainer>
      <form onSubmit={handleSubmit}>
        <StepContainer>
          <Number>2</Number>
          <h2>Fabric Info</h2>
        </StepContainer>
        <FormContainer>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="e.g. cotton fabric with dots"
            value={newCard.name}
            onChange={handleChange}
            required
          />
          <label>Type:</label>
          <select name="type" value={newCard.type} onChange={handleChange}>
            <option value="">Choose a fabric type</option>
            <option value="">---</option>
            <option value="Cotton">Cotton</option>
            <option value="Denim">Denim</option>
            <option value="Jersey">Jersey</option>
            <option value="Linen">Linen</option>
            <option value="Muslin">Muslin</option>
            <option value="Viscose">Viscose</option>
          </select>

          <label>Length:</label>
          <div>
            <input
              name="fabricLength"
              type="number"
              placeholder="e.g. 3,0"
              value={newCard.fabricLength}
              onChange={handleChange}
              required
              className="smallinput"
            />
            <span> m</span>
          </div>
          <label>Width:</label>
          <div>
            <input
              name="fabricWidth"
              type="number"
              placeholder="e.g. 1,45"
              value={newCard.fabricWidth}
              onChange={handleChange}
              className="smallinput"
            />
            <span> m</span>
          </div>
          <label>Color:</label>
          <input
            name="fabricColor"
            type="text"
            placeholder="e.g. blue"
            value={newCard.fabricColor}
            onChange={handleChange}
          />
        </FormContainer>
        <StepContainer>
          <Number>3</Number>
          <h2>Price in Euro</h2>
          <input
            name="price"
            type="number"
            placeholder="e.g. 9,95"
            value={newCard.price}
            onChange={handleChange}
            required
            className="smallinput"
          />
          <RedButton type="submit" text="Add" />
        </StepContainer>
      </form>
    </>
  );
}

Form.propTypes = {
  onCreate: PropTypes.func
};

export default withRouter(Form);

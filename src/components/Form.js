import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RedButton from "./RedButton";
import axios from "axios";
import { withRouter } from "react-router-dom";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const StyledUpload = styled.div`
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  select {
    font-size: 14px;
    width: 245px;
    height: 25px;
    border: grey solid 1px;
    padding: 3px;
    border-radius: 15px;
  }
  label {
    margin: 7px;
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #131426;
  border-radius: 50%;
  color: white;
  margin-top: 10px;
`;

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
    name: "",
    type: "",
    fabricLength: "",
    fabricWidth: "",
    fabricColor: "",
    price: "",
    source: "",
    bookmark: false
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
      name: newCard.name,
      type: newCard.type,
      fabricLength: newCard.fabricLength,
      fabricWidth: newCard.fabricWidth,
      fabricColor: newCard.fabricColor,
      price: newCard.price,
      source: image ? image : "../../images/default-img.png",
      bookmark: false
    };
    onCreate(item);
    history.replace("/");
  }

  return (
    <>
      <FormContainer>
        <Number>1</Number>
        <h2>Upload Image</h2>
        <StyledUpload>
          {image ? (
            <img src={image} alt="" style={{ width: "30%" }} />
          ) : (
            <input type="file" name="file" onChange={upload} />
          )}
        </StyledUpload>
      </FormContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Number>2</Number>
          <h2>Fabric Info</h2>
          <label>
            Name:{" "}
            <input
              name="name"
              type="text"
              placeholder="Cotton fabric with dots"
              value={newCard.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Type:{" "}
            <select name="type" value={newCard.type} onChange={handleChange}>
              <option value="Cotton">Cotton</option>
              <option value="Denim">Denim</option>
              <option value="Jersey">Jersey</option>
              <option value="Linen">Linen</option>
              <option value="Muslin">Muslin</option>
              <option value="Viscose">Viscose</option>
            </select>
          </label>
          <label>
            Length:{" "}
            <input
              name="fabricLength"
              type="number"
              placeholder="3"
              value={newCard.fabricLength}
              onChange={handleChange}
              required
            />
            m
          </label>
          <label>
            Width:{" "}
            <input
              name="fabricWidth"
              type="number"
              placeholder="1.45"
              value={newCard.fabricWidth}
              onChange={handleChange}
            />
            m
          </label>
          <label>
            Color:{" "}
            <input
              name="fabricColor"
              type="text"
              placeholder="blue"
              value={newCard.fabricColor}
              onChange={handleChange}
            />
          </label>
        </FormContainer>
        <FormContainer>
          <Number>3</Number>
          <h2>Price</h2>
          <label>
            Price:{" "}
            <input
              name="price"
              type="number"
              placeholder="10"
              value={newCard.price}
              onChange={handleChange}
              required
            />
            Euro
          </label>
          <RedButton type="submit" text="Add" />
        </FormContainer>
      </form>
    </>
  );
}

Form.propTypes = {
  onCreate: PropTypes.func
};

export default withRouter(Form);

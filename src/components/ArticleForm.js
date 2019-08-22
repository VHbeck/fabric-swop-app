import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import uuid from "uuid/v1";
import RedButton from "./RedButton";
import Number from "./Number";
import {
  FormContainer,
  StyledUpload,
  StepContainer,
  StyledError
} from "./FormStyles";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function ArticleForm({ onCreate, history, profile }) {
  const [newCard, setnewCard] = React.useState({
    name: "",
    type: "",
    fabricLength: "",
    fabricWidth: "",
    fabricColor: "",
    price: "",
    source: ""
  });
  const [image, setImage] = React.useState("");
  const [errors, setErrors] = React.useState({});

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

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setnewCard({
      ...newCard,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (newCard.name.trim() < 3) {
      errors.name = "Please put in a name with at least three characters";
    }
    if (newCard.fabricLength.trim() === "") {
      errors.fabricLength = "Please put in a fabric length";
    }
    if (newCard.fabricWidth.trim() === "") {
      errors.fabricWidth = "Please put in a fabric width";
    }
    if (newCard.price.trim() === "") {
      errors.price = "Please put in a price";
    }
    if (newCard.fabricColor.trim() === "") {
      errors.fabricColor = "Please put in at least one color";
    }
    if (newCard.type.trim() === "") {
      errors.type = "Please choose a fabric type";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }
    const item = {
      _id: uuid(),
      ...newCard,
      source: image,
      bookmark: false,
      dis: false,
      vendorName: profile.username,
      vendorId: profile._id,
      vendorImage: profile.imageSource
    };
    onCreate(item);
    history.replace(`/details/${item._id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
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
          error={errors.name}
        />
        {errors.name && (
          <StyledError data-cy="error-name">{errors.name}</StyledError>
        )}
        <label>Type:</label>
        <select
          name="type"
          value={newCard.type}
          onChange={handleChange}
          error={errors.fabricLength}
        >
          <option value="">Choose a fabric type</option>
          <option value="">---</option>
          <option value="Cotton">Cotton</option>
          <option value="Denim">Denim</option>
          <option value="Jersey">Jersey</option>
          <option value="Linen">Linen</option>
          <option value="Muslin">Muslin</option>
          <option value="Viscose">Viscose</option>
        </select>
        {errors.type && (
          <StyledError data-cy="error-type">{errors.type}</StyledError>
        )}
        <label>Length:</label>
        <div>
          <input
            name="fabricLength"
            type="number"
            placeholder="e.g. 3,0"
            value={newCard.fabricLength}
            onChange={handleChange}
            className="smallinput"
            error={errors.fabricLength}
          />
          {errors.fabricLength && (
            <StyledError data-cy="error-fabricLength">
              {errors.fabricLength}
            </StyledError>
          )}
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
            error={errors.fabricWidth}
          />
          {errors.fabricWidth && (
            <StyledError data-cy="error-fabricWidth">
              {errors.fabricWidth}
            </StyledError>
          )}
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
        {errors.fabricColor && (
          <StyledError data-cy="error-fabricColor">
            {errors.fabricColor}
          </StyledError>
        )}
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
          className="smallinput"
          error={errors.price}
        />
        {errors.price && (
          <StyledError data-cy="error-price">{errors.price}</StyledError>
        )}
        <RedButton type="submit" text="Add" data-cy="submit-button" />
      </StepContainer>
    </form>
  );
}

ArticleForm.propTypes = {
  onCreate: PropTypes.func,
  profile: PropTypes.object
};

export default withRouter(ArticleForm);

import React from "react";
import styled from "styled-components";
import axios from "axios";
import uuid from "uuid/v1";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RedButton, GreyButton } from "./Buttons";
import { StyledUpload, FormContainer, StyledError } from "./FormStyles";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const PasswordInput = styled.input`
  &:focus {
    background: hsl(
      ${props => Math.min(props.value.length * 10, 100)},
      60%,
      60%
    );
    color: black;
  }
`;

function RegisterForm({ onCreateProfile, history }) {
  const [newProfile, setNewProfile] = React.useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    imageSource: "",
    purchases: []
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
    setNewProfile({
      ...newProfile,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (newProfile.username.trim() < 3) {
      errors.username =
        "Please put in a username with at least three characters";
    }
    if (newProfile.password.length < 7) {
      errors.password = "The password must contain at least seven characters";
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
      username: newProfile.username,
      password: newProfile.password,
      firstName: newProfile.firstName,
      lastName: newProfile.lastName,
      address: newProfile.address,
      email: newProfile.email,
      birthday: newProfile.birthday,
      imageSource: image,
      purchases: []
    };
    onCreateProfile(item);
    history.replace("/feed");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <label>Upload a picture</label>
        <StyledUpload>
          {image ? (
            <img src={image} alt="" style={{ width: "30%" }} />
          ) : (
            <input type="file" name="file" onChange={upload} />
          )}
        </StyledUpload>
        <label>Username</label>
        <input
          placeholder="Username"
          name="username"
          value={newProfile.username}
          onChange={handleChange}
          error={errors.username}
          data-cy="register-username"
        />
        {errors.username && (
          <StyledError data-cy="error-username">{errors.username}</StyledError>
        )}
        <label>First Name</label>
        <input
          placeholder="First name"
          name="firstName"
          value={newProfile.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          placeholder="Last name"
          name="lastName"
          value={newProfile.lastName}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          placeholder="Address"
          name="address"
          value={newProfile.address}
          onChange={handleChange}
        />
        <label>E-Mail</label>
        <input
          placeholder="E-Mail"
          type="email"
          name="email"
          value={newProfile.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <PasswordInput
          placeholder="Password"
          type="password"
          name="password"
          value={newProfile.password}
          onChange={handleChange}
          error={errors.password}
          data-cy="register-password"
        />
        {errors.password && (
          <StyledError data-cy="error-password">{errors.password}</StyledError>
        )}
        <RedButton text="Register" type="submit" data-cy="submit-button" />
      </FormContainer>
      <ButtonContainer>
        <Link to="/" data-cy="nav-start">
          <GreyButton text="Back" />
        </Link>
      </ButtonContainer>
    </form>
  );
}

RegisterForm.propTypes = {
  onCreateProfile: PropTypes.func
};

export default withRouter(RegisterForm);

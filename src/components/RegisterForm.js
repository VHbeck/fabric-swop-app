import React from "react";
import styled from "styled-components";
import axios from "axios";
import uuid from "uuid/v1";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import RedButton from "./RedButton";
import GreyButton from "./GreyButton";
import { StyledUpload, FormContainer } from "./FormContainer";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

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

  const [newProfile, setNewProfile] = React.useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    birthday: "",
    sewingMachine: "",
    favoriteFabric: "",
    imageSource: "",
    purchases: ""
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNewProfile({
      ...newProfile,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      _id: uuid(),
      username: newProfile.username,
      password: newProfile.password,
      firstName: newProfile.firstName,
      lastName: newProfile.lastName,
      address: newProfile.address,
      email: newProfile.email,
      birthday: newProfile.birthday,
      sewingMachine: newProfile.sewingMachine,
      favoriteFabric: newProfile.favoriteFabric,
      imageSource: image ? image : "images/lou.jpg",
      purchases: ""
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
          required
          name="username"
          value={newProfile.username}
          onChange={handleChange}
        />
        <label>First Name</label>
        <input
          placeholder="First name"
          required
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
        <label>Birthday</label>
        <input
          placeholder="Birthday"
          type="date"
          name="birthday"
          value={newProfile.birthday}
          onChange={handleChange}
        />
        <label>Your sewing machine</label>
        <input
          placeholder="Sewing Machine"
          name="sewingMachine"
          value={newProfile.sewingMachine}
          onChange={handleChange}
        />
        <label>Favorite fabric</label>
        <input
          placeholder="Favorite Fabric"
          name="favoriteFabric"
          value={newProfile.favoriteFabric}
          onChange={handleChange}
        />
        <label>Password</label>
        <PasswordInput
          placeholder="Password"
          type="password"
          required
          name="password"
          value={newProfile.password}
          onChange={handleChange}
          minLength="7"
        />
        <RedButton text="Register now" type="submit" />
        <Link to="/login">
          <GreyButton text="Login" />
        </Link>
      </FormContainer>
    </form>
  );
}

export default withRouter(RegisterForm);

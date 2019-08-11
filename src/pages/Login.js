import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import RedButton from "../components/RedButton";
import Header from "../components/Header";
import { StyledError } from "../components/FormContainer";

const StyledInput = styled.input`
  width: 70%;
  font-size: 18px;
  align-self: center;
  height: 25px;
  border: grey solid 1px;
  padding: 5px;
  border-radius: 15px;
  margin: 10px 0px 10px 0px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgb(253, 247, 245);
  background: linear-gradient(
    0deg,
    rgba(253, 247, 245, 1) 36%,
    rgba(255, 224, 199, 1) 69%,
    rgba(255, 200, 202, 1) 100%
  );
`;

function Login({ onLogin, activeProfile, login, history }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const profile = activeProfile;

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function validate() {
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Please put in a valid username.";
    }
    if (password.length === "") {
      errors.password = "Please put in a valid password.";
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
    if (profile.username === username && profile.password === password) {
      history.replace("/feed");
    } else {
    }
  }

  return (
    <>
      <LoginContainer>
        <Header headline="Login" />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="your username"
            value={username}
            onChange={handleUsernameChange}
            error={errors.username}
          />
          {errors.username && <StyledError>{errors.username}</StyledError>}
          <StyledInput
            type="password"
            placeholder="your password"
            value={password}
            onChange={handlePasswordChange}
            error={errors.password}
          />
          {errors.password && <StyledError>{errors.password}</StyledError>}

          <RedButton
            type="submit"
            text="Login"
            onClick={() => onLogin(username)}
            login={login}
          />
          <Link to="/register">
            <GreyButton text="Register" />
          </Link>
        </StyledForm>
      </LoginContainer>
    </>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
  activeProfile: PropTypes.object
};

export default Login;

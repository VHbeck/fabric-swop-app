import React from "react";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import RedButton from "../components/RedButton";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background: rgb(253, 247, 245);
  background: linear-gradient(
    0deg,
    rgba(253, 247, 245, 1) 36%,
    rgba(255, 224, 199, 1) 69%,
    rgba(255, 200, 202, 1) 100%
  );
`;

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

function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const profile = props.activeProfile;

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function handleSubmit() {
    if (profile.username === username && profile.password === password) {
      console.log("right Password");
      props.history.replace("/feed");
    } else {
      console.log("wrong Password");
    }
  }

  return (
    <>
      <Container>
        <Header headline="Login" />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <StyledInput
            type="password"
            placeholder="your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <RedButton
            type="submit"
            text="Login"
            onClick={() => props.onLogin(username)}
            login={props.login}
          />
          <Link to="/register">
            <GreyButton text="Register" />
          </Link>
        </StyledForm>
      </Container>
    </>
  );
}

export default Login;

import React from "react";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  if (profile.username === username && profile.password === password) {
    console.log("right Password");
    login();
  } else {
    console.log("wrong Password");
  }

  function login() {
    props.history.replace("/feed");
  }

  return (
    <>
      <Container>
        <Header headline="Login" />
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

        <GreyButton
          text="Login"
          onClick={() => props.onLogin(username)}
          login={props.login}
        />
      </Container>
    </>
  );
}

export default Login;

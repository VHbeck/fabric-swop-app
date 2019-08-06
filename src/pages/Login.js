import React from "react";
import { Link } from "react-router-dom";
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

function Login() {
  return (
    <>
      <Container>
        <Header headline="Login" />
        <StyledInput type="text" placeholder="your username" />
        <StyledInput type="text" placeholder="your password" />
        <Link to="/feed">
          <GreyButton text="Login" />
        </Link>
      </Container>
    </>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import RedButton from "../components/RedButton";
import { FadeIn, Rotate } from "../utils/Animations";
import { Background } from "../components/Background";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    animation: ${FadeIn} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  }
`;

const StyledImage = styled.img`
  width: 180px;
  display: block;
  margin: 50px;
  animation: ${Rotate} 0.8s linear both;
`;

function Start() {
  return (
    <Background>
      <Container>
        <StyledImage src="logo-small.svg" />
        <Link to="/register">
          <RedButton text="Register" />
        </Link>
        <Link to="/login">
          <GreyButton text="Login" />
        </Link>
      </Container>
    </Background>
  );
}

export default Start;

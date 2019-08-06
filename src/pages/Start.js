import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import RedButton from "../components/RedButton";
import { keyframes } from "styled-components";

const Rotate = keyframes`
0% {
    transform: scale(1) rotateZ(0);
  }
  50% {
    transform: scale(2) rotateZ(180deg);
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
`;

const FadeIn = keyframes`
0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(253, 247, 245);
  background: linear-gradient(
    0deg,
    rgba(253, 247, 245, 1) 36%,
    rgba(255, 224, 199, 1) 69%,
    rgba(255, 200, 202, 1) 100%
  );
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
    <>
      <Container>
        <StyledImage src="logo-small.svg" />
        <Link to="/register">
          <RedButton text="Register" />
        </Link>
        <Link to="/login">
          <GreyButton text="Login" />
        </Link>
      </Container>
    </>
  );
}

export default Start;

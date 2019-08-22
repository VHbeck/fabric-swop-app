import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GreyButton, RedButton } from "../components/Buttons";
import { Rotate } from "../utils/Animations";
import { Background, StartContainer } from "../components/Background";

const StyledImage = styled.img`
  width: 180px;
  display: block;
  margin: 50px;
  animation: ${Rotate} 0.8s linear both;
`;

function Start() {
  return (
    <Background>
      <StartContainer>
        <StyledImage src="logo-small.svg" />
        <Link to="/register" data-cy="register-button">
          <RedButton text="Register" />
        </Link>
        <Link to="/login" data-cy="login-button">
          <GreyButton text="Login" />
        </Link>
      </StartContainer>
    </Background>
  );
}

export default Start;

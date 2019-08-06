import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";

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
`;

const StyledImage = styled.img`
  width: 180px;
  display: block;
  margin: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 90%;
  font-size: 18px;
  align-self: center;
  height: 25px;
  border: grey solid 1px;
  padding: 5px;
  border-radius: 15px;
  margin: 10px 0px 10px 0px;
`;

function Register() {
  return (
    <>
      <Container>
        <StyledImage src="logo-small.svg" />
        <InputContainer />
        <Link to="/feed">
          <GreyButton text="Register" />
        </Link>
      </Container>
    </>
  );
}

export default Register;

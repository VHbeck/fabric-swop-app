import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(253, 247, 245);
  background: linear-gradient(
    0deg,
    rgba(253, 247, 245, 1) 36%,
    rgba(255, 224, 199, 1) 69%,
    rgba(255, 200, 202, 1) 100%
  );
`;

function Register({ onCreateProfile }) {
  return (
    <Container>
      <Header headline="Register" />
      <RegisterForm onCreateProfile={onCreateProfile} />
    </Container>
  );
}

Register.propTypes = {
  onCreateProfile: PropTypes.func
};

export default Register;

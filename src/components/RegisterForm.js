import React from "react";
import styled from "styled-components";
import GreyButton from "./GreyButton";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  margin: 0px 30px 30px 30px;
  input {
    font-size: 18px;
    width: 95%;
    border: grey solid 1px;
    padding: 5px;
    border-radius: 15px;
    background-color: white;
    margin: 10px;
  }
  label {
    font-size: 18px;
    margin-top: 15px;
  }
`;

function RegisterForm() {
  return (
    <form>
      <FormContainer>
        <input placeholder="Username" required />
        <input placeholder="First name" required />
        <input placeholder="Last name" />
        <input placeholder="Address" />
        <input placeholder="E-Mail" type="email" />
        <input placeholder="Birthday" type="date" />
        <input placeholder="Sewing Machine" />
        <input placeholder="Favorite Fabric" />
        <input placeholder="Password" type="password" required />
        <Link to="/feed">
          <GreyButton text="Register now" type="submit" />
        </Link>
      </FormContainer>
    </form>
  );
}

export default RegisterForm;

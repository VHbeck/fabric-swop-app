import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  height: 35px;
  width: 133px;
  background-color: lightgrey;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 15px;
  border: none;
`;

function GreyButton(props) {
  return (
    <Link to={props.to}>
      <StyledButton>{props.text}</StyledButton>
    </Link>
  );
}

GreyButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};

export default GreyButton;

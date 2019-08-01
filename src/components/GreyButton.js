import React from "react";
import styled from "styled-components";
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
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}

GreyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default GreyButton;

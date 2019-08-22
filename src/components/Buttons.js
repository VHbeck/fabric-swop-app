import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButtonRed = styled.button`
  height: 35px;
  width: 120px;
  background-color: #ff979a;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 10px;
  border: none;
`;

const StyledButtonGrey = styled.button`
  height: 35px;
  width: 120px;
  background-color: lightgrey;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 15px;
  border: none;
`;

export function RedButton({ onClick, text, dis, "data-cy": dataCy }) {
  return (
    <StyledButtonRed
      color="red"
      onClick={onClick}
      disabled={dis}
      data-cy={dataCy}
    >
      {text}
    </StyledButtonRed>
  );
}

export function GreyButton({ onClick, text, "data-cy": dataCy, disabled }) {
  return (
    <StyledButtonGrey onClick={onClick} data-cy={dataCy} disabled={disabled}>
      {text}
    </StyledButtonGrey>
  );
}

RedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dataCy: PropTypes.string,
  dis: PropTypes.bool
};

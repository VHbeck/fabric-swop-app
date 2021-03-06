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

const StyledFilterButton = styled.button`
  padding: 5px 10px 5px 10px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #131426;
  border: #131426 solid 1px;
  border-radius: 15px;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  margin: 10px 0px 0px 0px;
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

export function FilterButtonUp({ onClick, text }) {
  return (
    <StyledFilterButton onClick={onClick}>
      {text} <i className="fas fa-arrow-up" />
    </StyledFilterButton>
  );
}

export function FilterButtonDown({ onClick, text }) {
  return (
    <StyledFilterButton onClick={onClick}>
      {text} <i className="fas fa-arrow-down" />
    </StyledFilterButton>
  );
}

RedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dataCy: PropTypes.string,
  dis: PropTypes.bool
};

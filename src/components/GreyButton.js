import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  height: 35px;
  width: 133px;
  background-color: lightgrey;
  border-radius: 15px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  margin: 15px;
  border: none;
`;

function GreyButton({ onClick, text, "data-cy": dataCy, disabled }) {
  return (
    <StyledButton onClick={onClick} data-cy={dataCy} disabled={disabled}>
      {text}
    </StyledButton>
  );
}

GreyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dataCy: PropTypes.string
};

export default GreyButton;

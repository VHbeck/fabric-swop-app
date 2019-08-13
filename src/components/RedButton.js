import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  height: 35px;
  width: 133px;
  background-color: #ff979a;
  border-radius: 15px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  margin: 10px;
  border: none;
`;

function RedButton({ onClick, text, dis, "data-cy": dataCy }) {
  return (
    <StyledButton onClick={onClick} disabled={dis} data-cy={dataCy}>
      {text}
    </StyledButton>
  );
}

RedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default RedButton;

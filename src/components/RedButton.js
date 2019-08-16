import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
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

function RedButton({ onClick, text, dis, "data-cy": dataCy }) {
  return (
    <StyledButton onClick={onClick} disabled={dis} data-cy={dataCy}>
      {text}
    </StyledButton>
  );
}

RedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dataCy: PropTypes.string,
  dis: PropTypes.bool
};

export default RedButton;

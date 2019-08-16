import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import PropTypes from "prop-types";

const HeaderStyled = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100vw;
  height: 80px;
  margin-top: 15px;
`;

function Header({ headline }) {
  return (
    <HeaderStyled data-cy="header-title">
      <Headline>{headline}</Headline>
    </HeaderStyled>
  );
}

Header.propTypes = {
  headline: PropTypes.string
};

export default Header;

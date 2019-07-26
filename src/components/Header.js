import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import PropTypes from "prop-types";

const Logo = styled.img`
  position: absolute;
  left: 15px;
  top: 30px;
`;

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 0;
  flex-shrink: 0;
  background: rgb(255, 224, 199);
  background: linear-gradient(
    0deg,
    rgba(255, 224, 199, 1) 0%,
    rgba(255, 200, 202, 1) 100%
  );
  width: 100vw;
  height: 70px;
`;

function Header(props) {
  return (
    <HeaderStyled>
      <Logo src="logo-small.svg" />
      <Headline>{props.headline}</Headline>
    </HeaderStyled>
  );
}

Header.propTypes = {
  headline: PropTypes.string
};

export default Header;

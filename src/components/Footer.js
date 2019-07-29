import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #ffe0c7;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Icons = styled.div`
  font-size: 35px;
  align-self: center;
  text-align: center;
  :active {
    color: #ff979a;
  }
`;

function Footer(props) {
  return (
    <FooterStyled>
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons onClick={props.handleFavoriteClick}>
        <i className="far fa-heart" />
      </Icons>
    </FooterStyled>
  );
}

export default Footer;

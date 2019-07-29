import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: #131426;
  :active {
    color: #ff979a;
  }

  a {
    color: #131426;
    :active {
      color: #ff979a;
    }
  }
`;

function Footer(props) {
  return (
    <FooterStyled>
      <Icons>
        <Link to="/">
          <i class="fas fa-home" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/create">
          <i class="fas fa-plus" />
        </Link>
      </Icons>
      <Icons />
      <Icons />

      <Icons onClick={props.handleFavoriteClick}>
        <Link to="/">
          {" "}
          <i className="far fa-heart" />{" "}
        </Link>
      </Icons>
    </FooterStyled>
  );
}

export default Footer;

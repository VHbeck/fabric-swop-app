import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyled = styled.div`
  background-color: rgba(253, 247, 245, 0.85);
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Icons = styled.div`
  font-size: 30px;
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
  .fa-search {
    border-radius: 50%;
    background: white;
    padding: 15px;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <Icons>
        <Link to="/feed">
          <i className="fas fa-home" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/create">
          <i className="fas fa-plus" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/search">
          <i className="fas fa-search" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/profile">
          <i className="far fa-user" />
        </Link>
      </Icons>

      <Icons>
        <Link to="/favorite">
          <i className="far fa-heart" />
        </Link>
      </Icons>
    </FooterStyled>
  );
}

export default Footer;

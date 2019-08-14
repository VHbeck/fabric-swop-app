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

function Footer({ profile }) {
  console.log(profile._id);
  return (
    <FooterStyled>
      <Icons>
        <Link to="/feed" data-cy="nav-feed">
          <i className="fas fa-home" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/create-article" data-cy="nav-create-article">
          <i className="fas fa-plus" />
        </Link>
      </Icons>
      <Icons>
        <Link to="/search" data-cy="nav-search">
          <i className="fas fa-search" />
        </Link>
      </Icons>
      <Icons>
        <Link to={`/profile/${profile._id}`} data-cy="nav-profile">
          <i className="far fa-user" />
        </Link>
      </Icons>

      <Icons>
        <Link to="/favorite" data-cy="nav-favorite">
          <i className="far fa-heart" />
        </Link>
      </Icons>
    </FooterStyled>
  );
}

export default Footer;

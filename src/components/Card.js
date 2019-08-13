import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bookmark from "../components/Bookmark";
import { Link } from "react-router-dom";
import GreyButton from "./GreyButton";
import RedButton from "./RedButton";

const CardFrame = styled.div`
  margin: 15px 15px 30px 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 9px 9px 33px -22px rgba(0, 0, 0, 0.75);
`;

const CardImage = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
`;

const CardTitle = styled.p`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 800;
  margin-bottom: 5px;
`;

const CardLengthText = styled.span`
  margin-left: 15px;
`;

const CardPrice = styled.span`
  color: #ff979a;
  align-self: flex-end;
  font-size: 20px;
  font-weight: bold;
  padding-right: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 25px;
  }
`;

function Card({
  onBookmarkClick,
  name,
  source,
  length,
  price,
  onDetailsClick,
  onBuyClick,
  bookmark,
  dis
}) {
  return (
    <CardFrame>
      <Bookmark active={bookmark} onClick={onBookmarkClick} />
      <CardImage src={source} alt={name} />
      <CardTitle>{name}</CardTitle>
      <TextContainer>
        <CardLengthText>Length: {length} m</CardLengthText>
        <CardPrice>{price} Euro</CardPrice>
      </TextContainer>
      <TextContainer>
        <GreyButton
          text="Details"
          onClick={onDetailsClick}
          data-cy="nav-details"
        />
        <Link to="/profile">
          <RedButton text="Buy now" onClick={onBuyClick} dis={dis} />
        </Link>
      </TextContainer>
    </CardFrame>
  );
}

Card.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
  length: PropTypes.string,
  price: PropTypes.string,
  bookmark: PropTypes.bool,
  onBookmarkClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
  onBuyClick: PropTypes.func
};

export default Card;

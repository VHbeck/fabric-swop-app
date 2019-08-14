import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import RedButton from "../components/RedButton";
import { Link } from "react-router-dom";

const MainImage = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px;
`;

const Frame = styled.div`
  background: white;
  margin: 20px 20px 90px 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const StyledPrice = styled.div`
  color: #ff979a;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 15px 0px 0px;
`;

function Details({ match, cards, onBuyClick, profile }) {
  const card = cards && cards.find(card => card._id === match.params.id);
  if (!card) {
    return null;
  }

  return (
    <>
      <Header headline={card.name} />
      <Container>
        <Frame>
          <MainImage
            src={card.source || "../../images/default-img.png"}
            alt={card.title}
          />
          <Description>
            <BoldText>Type:</BoldText> <span>{card.type || "no type"}</span>
            <BoldText>Length:</BoldText>
            <span>{card.fabricLength || "no length"}</span>
            <BoldText>Width:</BoldText>
            <span>{card.fabricWidth || "no width"}</span>
            <BoldText>Color:</BoldText> <span>{card.fabricColor}</span>
            <BoldText>Vendor: </BoldText>{" "}
            <Link to={`/profile/${card.vendorId}`}>
              <span>{card.vendorName}</span>
            </Link>
            <StyledPrice>
              <span>{card.price} Euro</span>
            </StyledPrice>
            <span />
          </Description>

          <Link to="/feed">
            <GreyButton text="Back" />
          </Link>
          <Link to="/profile" data-cy="nav-profile">
            <RedButton
              text="Buy now"
              onClick={() => onBuyClick(card._id)}
              dis={card.dis}
            />
          </Link>
        </Frame>
      </Container>
      <Footer profile={profile} />
    </>
  );
}

Details.propTypes = {
  cards: PropTypes.array,
  onBuyClick: PropTypes.func
};

export default Details;

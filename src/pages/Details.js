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
  grid-template-columns: 1fr 3fr;
  margin: 20px 20px 0px 20px;
`;

const Frame = styled.div`
  background: white;
  margin: 20px 20px 0px 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const StyledPrice = styled.div`
  color: #ff979a;
  font-size: 20px;
  font-weight: bold;
  padding: 0px 40px 20px 0px;
  text-align: right;
`;

const VendorImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 15px 0px 5px 20px;
`;

const VendorName = styled.span`
  display: block;
  padding-top: 25px;
  padding-bottom: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0px 25px 25px 25px;
  }
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
            <span>{`${card.fabricLength} m` || "no length"}</span>
            <BoldText>Width:</BoldText>
            <span>{`${card.fabricWidth} m` || "no width"}</span>
            <BoldText>Color:</BoldText> <span>{card.fabricColor}</span>
            <VendorImage src={card.vendorImage || "../../images/default.jpg"} />
            <Link to={`/profile/${card.vendorId}`}>
              <VendorName>{card.vendorName}</VendorName>
            </Link>
          </Description>
          <StyledPrice>
            <span> {card.price} Euro</span>
          </StyledPrice>
          <TextContainer>
            <Link to="/feed">
              <GreyButton text="Back" />
            </Link>
            <Link to={`/profile/${profile._id}`} data-cy="nav-profile">
              <RedButton
                text="Buy now"
                onClick={() => onBuyClick(card._id)}
                dis={card.dis}
                data-cy="buy-button"
              />
            </Link>
          </TextContainer>
        </Frame>
      </Container>
      <Footer profile={profile} />
    </>
  );
}

Details.propTypes = {
  cards: PropTypes.array,
  onBuyClick: PropTypes.func,
  profile: PropTypes.object
};

export default Details;

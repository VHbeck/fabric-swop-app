import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import styled from "styled-components";
import GreyButton from "../components/GreyButton";
import { Link } from "react-router-dom";

const MainImage = styled.img`
  width: 100%;
  height: 215px;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px;
`;

const Frame = styled.div`
  background: white;
  margin: 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const StyledPrice = styled.div`
  color: #ff979a;
  font-size: 24px;
  font-weight: bold;
  padding: 15px 15px 0px 15px;
`;

function Details(props) {
  const card = props.cards;
  return (
    <>
      <Header headline={card.name} />
      <Container>
        <Frame>
          <MainImage src={card.source} alt={card.title} />
          <Description>
            <BoldText>Type:</BoldText> <span>{card.type}</span>
            <BoldText>Length:</BoldText> <span>{card.fabricLength}</span>
            <BoldText>Width:</BoldText> <span>{card.fabricWidth}</span>
            <BoldText>Color:</BoldText> <span>{card.fabricColor}</span>
            <StyledPrice>
              <span>{card.price} Euro</span>
            </StyledPrice>
          </Description>
          <Link to="/">
            <GreyButton text="Back" />
          </Link>
        </Frame>
      </Container>
      <Footer />
    </>
  );
}

Details.propTypes = {
  cards: PropTypes.object
};

export default Details;

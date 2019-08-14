import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import GreyButton from "../components/GreyButton";

function Favorite({ cards, history, onBookmark, onBuyClick, profile }) {
  const outputArray =
    cards &&
    cards
      .filter(element => element.bookmark === true)
      .map(element => {
        return {
          _id: element._id,
          name: element.name,
          price: element.price,
          source: element.source,
          length: element.fabricLength,
          bookmark: element.bookmark,
          dis: element.dis
        };
      });
  const StyledParagraph = styled.p`
    text-align: center;
  `;

  function onDetailsClick(id) {
    history.replace(`/details/${id}`);
  }

  return (
    <>
      <Header headline="Favorite" />
      <Container>
        {outputArray.length === 0 && (
          <StyledParagraph>
            Go to your feed and add your favorite articles.
            <Link to="/feed" data-cy="nav-favorite-feed">
              <GreyButton text="Go to feed" />
            </Link>
          </StyledParagraph>
        )}
        {outputArray.map((out, index) => (
          <Card
            onDetailsClick={() => onDetailsClick(out._id)}
            onBookmarkClick={() => onBookmark(out._id)}
            onBuyClick={() => onBuyClick(out._id)}
            key={out.source + index}
            name={out.name}
            length={out.length}
            price={out.price}
            source={out.source || "../../images/default-img.png"}
            bookmark={out.bookmark}
            dis={out.dis}
            profile={profile}
          />
        ))}
      </Container>
      <Footer profile={profile} />
    </>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array,
  onBookmark: PropTypes.func,
  onBuyClick: PropTypes.func
};

export default withRouter(Favorite);

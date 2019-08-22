import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { GreyButton } from "../components/Buttons";

function Favorite({ cards, history, onBookmark, onBuyClick, profile }) {
  const content =
    cards &&
    cards
      .filter(element => element.bookmark === true)
      .map((out, index) => (
        <Card
          onDetailsClick={() => onDetailsClick(out._id)}
          onBookmarkClick={() => onBookmark(out._id)}
          onBuyClick={() => onBuyClick(out._id)}
          key={out.source + index}
          name={out.name}
          length={out.fabricLength}
          width={out.fabricWidth}
          price={out.price}
          source={out.source || "../../images/default-img.png"}
          bookmark={out.bookmark}
          dis={out.dis}
          profile={profile}
        />
      ));
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
        {content.length === 0 && (
          <StyledParagraph>
            Go to your feed and add your favorite articles.
            <Link to="/feed" data-cy="nav-favorite-feed">
              <GreyButton text="Go to feed" />
            </Link>
          </StyledParagraph>
        )}
        {content}
      </Container>
      <Footer profile={profile} />
    </>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array,
  onBookmark: PropTypes.func,
  onBuyClick: PropTypes.func,
  profile: PropTypes.object
};

export default withRouter(Favorite);

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Feed({ history, cards, onBookmark, onBuyClick, profile }) {
  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  const content =
    cards &&
    cards.map((card, index) => (
      <Card
        onDetailsClick={() => onDetailsClick(card._id)}
        onBookmarkClick={() => onBookmark(card._id)}
        onBuyClick={() => onBuyClick(card._id)}
        key={card.name + index}
        name={card.name}
        length={card.fabricLength}
        width={card.fabricWidth}
        price={card.price}
        source={card.source || "../../images/default-img.png"}
        bookmark={card.bookmark}
        dis={card.dis}
        profile={profile}
      />
    ));

  return (
    <>
      <Header headline="Feed" />
      <Container>{content}</Container>
      <Footer profile={profile} />
    </>
  );
}

Feed.propTypes = {
  cards: PropTypes.array,
  onDetailsClick: PropTypes.func,
  onBookmark: PropTypes.func,
  profile: PropTypes.object
};

export default withRouter(Feed);

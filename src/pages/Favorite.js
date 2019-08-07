import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Grow from "../components/Grow";
import { withRouter } from "react-router-dom";

function Favorite({ cards, history, onBookmark, onBuyClick }) {
  const output = cards;

  const outputArray =
    output &&
    output
      .filter(element => element.bookmark === true)
      .map(element => {
        return {
          _id: element._id,
          name: element.name,
          price: element.price,
          source: element.source,
          length: element.fabricLength,
          bookmark: element.bookmark
        };
      });

  function onDetailsClick(id) {
    history.replace(`/details/${id}`);
  }

  return (
    <>
      <Header headline="Favorite" />
      <Container>
        {outputArray.map((out, index) => (
          <Card
            onDetailsClick={() => onDetailsClick(out._id)}
            onBookmarkClick={() => onBookmark(out._id)}
            onBuyClick={() => onBuyClick(out._id)}
            key={out.source + index}
            name={out.name}
            length={out.length}
            price={out.price}
            source={out.source}
            bookmark={out.bookmark}
          />
        ))}
        <Grow />
      </Container>
      <Footer />
    </>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array
};

export default withRouter(Favorite);

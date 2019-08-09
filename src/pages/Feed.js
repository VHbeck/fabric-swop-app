import React from "react";
import Card from "../components/Card";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Feed({ history, cards, onBookmark, onBuyClick }) {
  const output = cards;

  const outputArray =
    output &&
    output.map(element => {
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

  const content = outputArray.map((out, index) => (
    <Card
      onDetailsClick={() => onDetailsClick(out._id)}
      onBookmarkClick={() => onBookmark(out._id)}
      onBuyClick={() => onBuyClick(out._id)}
      key={out.name + index}
      name={out.name}
      length={out.length}
      price={out.price}
      source={out.source}
      bookmark={out.bookmark}
    />
  ));

  return (
    <>
      <Header headline="Feed" />
      <Container>{content}</Container>
      <Footer />
    </>
  );
}

Feed.propTypes = {
  cards: PropTypes.array
};

export default withRouter(Feed);

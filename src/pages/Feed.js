import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Feed({ history, cards: output, onBookmark, onBuyClick }) {
  const outputArray =
    output &&
    output.map(element => {
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
      source={out.source || "../../images/default-img.png"}
      bookmark={out.bookmark}
      dis={out.dis}
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
  cards: PropTypes.array,
  onDetailsClick: PropTypes.func,
  onBookmark: PropTypes.func
};

export default withRouter(Feed);

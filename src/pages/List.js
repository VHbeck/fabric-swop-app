import React from "react";
import Card from "../components/Card";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function List(props) {
  //console.log(props.history);
  const output = props.cards;

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

  const initialOutput = outputArray.map((out, index) => (
    <Card
      onDetailsClick={() => props.onDetailsClick(out._id)}
      onBookmarkClick={() => props.onBookmark(out._id)}
      onBuyClick={() => props.onBuyClick(out._id)}
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
      <Container>{initialOutput}</Container>
      <Footer />
    </>
  );
}

List.propTypes = {
  cards: PropTypes.array
};

export default withRouter(List);

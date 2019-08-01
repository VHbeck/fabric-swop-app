import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Favorite(props) {
  const output = props.cards;

  const outputArray =
    output &&
    output
      .filter(element => element.bookmark === true)
      .map(element => {
        return {
          name: element.name,
          price: element.price,
          source: element.source,
          length: element.fabricLength,
          bookmark: element.bookmark
        };
      });

  return (
    <>
      <Header headline="Favorite" />
      <Container>
        {outputArray.map((out, index) => (
          <Card
            onDetailsClick={() => props.onDetailsClick(index)}
            key={out.source + index}
            name={out.name}
            length={out.length}
            price={out.price}
            source={out.source}
            bookmark={out.bookmark}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array
};

export default Favorite;

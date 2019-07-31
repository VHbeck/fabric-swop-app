import React from "react";
import Card from "../components/Card";
import { withRouter } from "react-router-dom";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function List(props) {
  console.log(props.history);
  const output = props.cards;

  const outputArray =
    output &&
    output.map(element => {
      return {
        name: element.name,
        price: element.price,
        source: element.source,
        length: element.fabricLength,
        bookmark: element.bookmark
      };
    });

  const initialOutput = outputArray.map((out, index) => (
    <Card
      onBookmarkClick={() => props.onBookmark(index)}
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

export default withRouter(List);
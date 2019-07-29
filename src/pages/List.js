import React from "react";
import Card from "../components/Card";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

const output = require("../models/items.json");

function List() {
  const [favoriteArray, setFavoriteArray] = React.useState("");

  const outputArray =
    output &&
    output.map(element => {
      return {
        name: element.title,
        price: element.price,
        source: element.source,
        length: element.length,
        bookmark: element.bookmark
      };
    });

  function favorite() {
    const bookmarkState = outputArray
      .filter(element => element.bookmark === "true")
      .map(element => {
        return {
          name: element.name,
          price: element.price,
          source: element.source,
          length: element.length,
          bookmark: element.bookmark
        };
      });

    setFavoriteArray(bookmarkState);
  }

  const initialOutput = outputArray.map((out, index) => (
    <Card
      key={out.name + index}
      name={out.name}
      length={out.length}
      price={out.price}
      source={out.source}
      bookmark={out.bookmark}
    />
  ));
  console.log(favoriteArray);
  console.log(outputArray);
  return (
    <>
      <Header headline="Feed" />
      <Container>
        {favoriteArray === ""
          ? initialOutput
          : favoriteArray.map((out, index) => (
              <Card
                key={out.source + index}
                name={out.name}
                length={out.length}
                price={out.price}
                source={out.source}
                bookmark={out.bookmark}
              />
            ))}
      </Container>
      <Footer handleFavoriteClick={favorite} />
    </>
  );
}

export default List;

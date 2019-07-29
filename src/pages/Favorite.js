import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
const output = require("../models/items.json");

function Favorite() {
  const outputArray =
    output &&
    output
      .filter(element => element.bookmark === "true")
      .map(element => {
        return {
          name: element.title,
          price: element.price,
          source: element.source,
          length: element.length,
          bookmark: element.bookmark
        };
      });

  return (
    <>
      <Header headline="Favorite" />
      <Container>
        {outputArray.map((out, index) => (
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
      <Footer />
    </>
  );
}
export default Favorite;

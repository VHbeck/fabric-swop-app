import React from "react";
import Card from "../components/Card";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

//const output = require("../models/items.json");

function List() {
  function getCardFromStorage() {
    try {
      return JSON.parse(localStorage.getItem("Card")) || [];
    } catch (error) {
      return [];
    }
  }

  const output = getCardFromStorage();

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

export default List;

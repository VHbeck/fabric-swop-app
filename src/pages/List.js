import React from "react";
import Card from "../components/Card";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function List(props) {
  const [favoriteArray, setFavoriteArray] = React.useState("");
  const output = [
    {
      title: "Baumwollstoff",
      length: "4",
      price: "5",
      source: "images/sample-fabric.jpg",
      bookmark: "true"
    },
    {
      title: "Leinenstoff",
      length: "3",
      price: "4",
      source: "images/sample-fabric2.jpg",
      bookmark: "false"
    },
    {
      title: "Polyesterstoff",
      length: "2",
      price: "8",
      source: "images/sample-fabric3.jpg",
      bookmark: "true"
    }
  ];
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
  //console.log(outputArray);

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

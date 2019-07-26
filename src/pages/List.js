import React from "react";
import Card from "../components/Card";

import Container from "../components/Container";
import Header from "../components/Header";

function List() {
  return (
    <>
      <Header headline="Feed" />
      <Container>
        <Card
          name="Cotton Fabric with Stripes"
          length="3"
          price="4"
          source="images/sample-fabric.jpg"
        />
        <Card
          name="Polyester Fabric with Stripes"
          length="5"
          price="8"
          source="images/sample-fabric2.jpg"
        />
        <Card
          name="Linen Fabric with stripes"
          length="7"
          price="3"
          source="images/sample-fabric3.jpg"
        />
      </Container>
    </>
  );
}

export default List;

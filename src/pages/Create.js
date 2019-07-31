import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Create(props) {
  return (
    <>
      <Header headline="Create" />
      <Container>
        <Form cards={props.cards} onCreate={props.onCreate} />
      </Container>
      <Footer />
    </>
  );
}

export default Create;

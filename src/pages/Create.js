import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Create({ cards, onCreate }) {
  return (
    <>
      <Header headline="Create" />
      <Container>
        <Form cards={cards} onCreate={onCreate} />
      </Container>
      <Footer />
    </>
  );
}

Create.propTypes = {
  cards: PropTypes.array,
  onCreate: PropTypes.func
};

export default Create;

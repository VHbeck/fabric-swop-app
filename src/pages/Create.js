import React from "react";
import PropTypes from "prop-types";
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

Create.propTypes = {
  cards: PropTypes.array,
  onCreate: PropTypes.func
};

export default Create;

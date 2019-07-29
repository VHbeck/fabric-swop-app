import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Create() {
  return (
    <>
      <Header headline="Create" />
      <Container>
        <Form />
      </Container>
      <Footer />
    </>
  );
}
export default Create;

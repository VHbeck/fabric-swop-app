import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ArticleForm from "../components/ArticleForm";

function CreateArticle({ onCreate }) {
  return (
    <>
      <Header headline="Create" />
      <Container>
        <ArticleForm onCreate={onCreate} />
      </Container>
      <Footer />
    </>
  );
}

CreateArticle.propTypes = {
  cards: PropTypes.array,
  onCreate: PropTypes.func
};

export default CreateArticle;

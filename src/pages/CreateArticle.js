import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ArticleForm from "../components/ArticleForm";

function CreateArticle({ onCreate, profile }) {
  return (
    <>
      <Header headline="Create Article" />
      <Container>
        <ArticleForm onCreate={onCreate} profile={profile} />
      </Container>
      <Footer profile={profile} />
    </>
  );
}

CreateArticle.propTypes = {
  cards: PropTypes.array,
  onCreate: PropTypes.func
};

export default CreateArticle;

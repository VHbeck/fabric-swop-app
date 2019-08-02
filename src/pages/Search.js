import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 90vh;
  text-align: center;
`;

function Search() {
  return (
    <>
      <Header headline="Search" />
      <SearchContainer>Coming soon</SearchContainer>
      <Footer />
    </>
  );
}

export default Search;

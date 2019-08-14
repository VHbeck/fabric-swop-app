import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "../components/Container";
import styled from "styled-components";
import Fuse from "fuse.js";
import { withRouter } from "react-router-dom";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 90%;
  font-size: 18px;
  align-self: center;
  height: 25px;
  border: grey solid 1px;
  padding: 5px;
  border-radius: 15px;
  margin: 10px 0px 10px 0px;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

function Search({ onBookmark, history, cards, onBuyClick, profile }) {
  const [input, setInput] = React.useState("");

  const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["type", "name", "fabricColor", "fabricLength", "price"]
  };
  const fuse = new Fuse(cards, options);
  const result = fuse.search(input);

  function handleSearchChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function onDetailsClick(id) {
    history.replace(`/details/${id}`);
  }

  return (
    <>
      <Header headline="Search" />
      <InputContainer>
        <StyledInput
          type="text"
          value={input}
          onChange={handleSearchChange}
          placeholder="Search for fabric types, colors, names etc."
        />
      </InputContainer>
      <Container>
        {result.length === 0 && (
          <StyledParagraph>
            Nothing found. Search for something else.
          </StyledParagraph>
        )}
        {result.map((out, index) => (
          <Card
            onBookmarkClick={() => onBookmark(out._id)}
            onDetailsClick={() => onDetailsClick(out._id)}
            onBuyClick={() => onBuyClick(out._id)}
            key={out.source + index}
            name={out.name}
            length={out.fabricLength}
            price={out.price || "no price"}
            source={out.source || "../../images/default-img.png"}
            color={out.color || "no color"}
            bookmark={out.bookmark}
            dis={out.dis}
          />
        ))}
      </Container>
      <Footer profile={profile} />
    </>
  );
}
Search.propTypes = {
  cards: PropTypes.array,
  onDetailsClick: PropTypes.func
};

export default withRouter(Search);

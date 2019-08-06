import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "../components/Container";
import styled from "styled-components";
import Grow from "../components/Grow";
import Fuse from "fuse.js";

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

function Search(props) {
  const [input, setInput] = React.useState("");
  const output = props.cards;

  var options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["type", "name", "fabricColor", "fabricLength", "price"]
  };
  var fuse = new Fuse(output, options);
  var result = fuse.search(input);

  function handleSearchChange(event) {
    const value = event.target.value.toLowerCase();
    setInput(value);
  }

  return (
    <>
      <Header headline="Search" />
      <InputContainer>
        <StyledInput
          type="text"
          value={input}
          onChange={handleSearchChange}
          placeholder="type something"
        />
      </InputContainer>
      <Container>
        {result.map((out, index) => (
          <Card
            onBookmarkClick={() => props.onBookmark(out._id)}
            onDetailsClick={() => props.onDetailsClick(out._id)}
            key={out.source + index}
            name={out.name}
            length={out.fabricLength}
            price={out.price}
            source={out.source}
            bookmark={out.bookmark}
          />
        ))}
        <Grow />
      </Container>
      <Footer />
    </>
  );
}
Search.propTypes = {
  cards: PropTypes.object,
  onDetailsClick: PropTypes.func
};

export default Search;

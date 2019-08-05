import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "../components/Container";
import styled from "styled-components";
import Grow from "../components/Grow";

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

  const outputArray =
    output &&
    output
      .filter(element => element.name.toLowerCase().includes(input))
      .map(element => {
        return {
          _id: element._id,
          name: element.name,
          price: element.price,
          source: element.source,
          length: element.fabricLength,
          bookmark: element.bookmark
        };
      });

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
        {outputArray.map((out, index) => (
          <Card
            onBookmarkClick={() => props.onBookmark(out._id)}
            onDetailsClick={() => props.onDetailsClick(index)}
            key={out.source + index}
            name={out.name}
            length={out.length}
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

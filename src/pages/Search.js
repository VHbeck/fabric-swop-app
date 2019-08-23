import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "../components/Container";
import styled from "styled-components";
import Fuse from "fuse.js";
import { withRouter } from "react-router-dom";
import { FilterButton } from "../components/Buttons";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 90%;
  font-size: 16px;
  align-self: center;
  height: 25px;
  border: grey solid 1px;
  padding: 5px 10px 5px 10px;
  border-radius: 15px;
  margin: 10px 0px 10px 0px;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Search({ onBookmark, history, cards, onBuyClick, profile }) {
  const [input, setInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState("");

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
    setFilteredResults(result);
  }

  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  function filterPriceAscending() {
    const filter = result.slice().sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setFilteredResults(filter);
  }

  function filterPriceDescending() {
    const filter = result.slice().sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setFilteredResults(filter);
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
      <ButtonContainer>
        <FilterButton text="Price ascending" onClick={filterPriceAscending} />
        <FilterButton text="Price descending" onClick={filterPriceDescending} />
      </ButtonContainer>
      <Container>
        {result.length === 0 ? (
          <StyledParagraph>
            Nothing found. Search for something else.
          </StyledParagraph>
        ) : (
          filteredResults.map((out, index) => (
            <Card
              onBookmarkClick={() => onBookmark(out._id)}
              onDetailsClick={() => onDetailsClick(out._id)}
              onBuyClick={() => onBuyClick(out._id)}
              key={out.source + index}
              name={out.name}
              length={out.fabricLength}
              width={out.fabricWidth}
              price={out.price || "no price"}
              source={out.source || "../../images/default-img.png"}
              color={out.color || "no color"}
              bookmark={out.bookmark}
              dis={out.dis}
              profile={profile}
            />
          ))
        )}
      </Container>
      <Footer profile={profile} />
    </>
  );
}
Search.propTypes = {
  cards: PropTypes.array,
  onBuyClick: PropTypes.func,
  onBookmark: PropTypes.func,
  profile: PropTypes.object
};

export default withRouter(Search);

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { FilterButton } from "../components/Buttons";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledDivider = styled.hr`
  margin: 0px 20px 0px 20px;
  border: 0;
  height: 0.5px;
  background: #131426;
`;

const StyledParagraph = styled.p`
  margin: 20px 20px 0px 20px;
`;

function Feed({ history, cards, onBookmark, onBuyClick, profile }) {
  const [sort, setSort] = React.useState(null);
  const [sortLength, setSortLength] = React.useState(null);

  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  function sortPriceAscending() {
    setSort("asc");
  }

  function sortPriceDescending() {
    setSort("desc");
  }
  function sortLengthAscending() {
    setSortLength("asc");
  }

  function sortLengthDescending() {
    setSortLength("desc");
  }

  const content =
    cards &&
    cards
      .slice()
      .sort((a, b) => {
        if (!sort) {
          return 0;
        } else {
          return (a.price - b.price) * (sort === "asc" ? 1 : -1);
        }
      })
      .sort((a, b) => {
        if (!sortLength) {
          return 0;
        } else {
          return (
            (a.fabricLength - b.fabricLength) * (sortLength === "asc" ? 1 : -1)
          );
        }
      })
      .map((card, index) => (
        <Card
          onDetailsClick={() => onDetailsClick(card._id)}
          onBookmarkClick={() => onBookmark(card._id)}
          onBuyClick={() => onBuyClick(card._id)}
          key={card.name + index}
          name={card.name}
          length={card.fabricLength}
          width={card.fabricWidth}
          price={card.price}
          source={card.source || "../../images/default-img.png"}
          bookmark={card.bookmark}
          dis={card.dis}
          profile={profile}
        />
      ));

  return (
    <>
      <Header headline="Feed" />
      <StyledParagraph>Filter</StyledParagraph>
      <StyledDivider />
      <ButtonContainer>
        <FilterButton text="Price ascending" onClick={sortPriceAscending} />
        <FilterButton text="Length ascending" onClick={sortLengthAscending} />
      </ButtonContainer>
      <ButtonContainer>
        <FilterButton text="Price descending" onClick={sortPriceDescending} />
        <FilterButton text="Length descending" onClick={sortLengthDescending} />
      </ButtonContainer>
      <Container>{content}</Container>
      <Footer profile={profile} />
    </>
  );
}

Feed.propTypes = {
  cards: PropTypes.array,
  onDetailsClick: PropTypes.func,
  onBookmark: PropTypes.func,
  profile: PropTypes.object
};

export default withRouter(Feed);

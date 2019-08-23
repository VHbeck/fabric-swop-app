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
  justify-content: space-between;
  align-items: center;
`;

function Feed({ history, cards, onBookmark, onBuyClick, profile }) {
  const [filteredResults, setFilteredResults] = React.useState("");

  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  function filterPriceAscending() {
    const filter = cards.slice().sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setFilteredResults(filter);
  }

  function filterPriceDescending() {
    const filter = cards.slice().sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setFilteredResults(filter);
  }

  const content =
    filteredResults &&
    filteredResults.map((card, index) => (
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

  const defaultContent =
    cards &&
    cards.map((card, index) => (
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
      <ButtonContainer>
        <FilterButton text="Price ascending" onClick={filterPriceAscending} />
        <FilterButton text="Price descending" onClick={filterPriceDescending} />
      </ButtonContainer>
      <Container>{content || defaultContent}</Container>
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

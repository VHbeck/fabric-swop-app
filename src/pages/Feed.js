import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Feed({ history, cards: output, onBookmark, onBuyClick, profile }) {
  const outputArray =
    output &&
    output.map(element => {
      return {
        _id: element._id,
        name: element.name,
        price: element.price,
        source: element.source,
        length: element.fabricLength,
        bookmark: element.bookmark,
        dis: element.dis
      };
    });

  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  const content = outputArray.map((out, index) => (
    <Card
      onDetailsClick={() => onDetailsClick(out._id)}
      onBookmarkClick={() => onBookmark(out._id)}
      onBuyClick={() => onBuyClick(out._id)}
      key={out.name + index}
      name={out.name}
      length={out.length}
      price={out.price}
      source={out.source || "../../images/default-img.png"}
      bookmark={out.bookmark}
      dis={out.dis}
      profile={profile}
    />
  ));

  return (
    <>
      <Header headline="Feed" />
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

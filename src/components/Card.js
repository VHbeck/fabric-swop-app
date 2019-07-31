import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bookmark from "../components/Bookmark";

const CardFrame = styled.div`
  margin: 15px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 9px 9px 33px -22px rgba(0, 0, 0, 0.75);
`;

const CardImage = styled.img`
  width: 100%;
  height: 215px;
`;

const CardTitle = styled.p`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 800;
  margin-bottom: 5px;
`;

const CardLengthText = styled.span`
  margin-left: 15px;
`;

const CardPrice = styled.span`
  color: #ff979a;
  align-self: flex-end;
  font-size: 20px;
  font-weight: bold;
  padding-right: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

function Card(props) {
  //console.log(props.bookmark);
  return (
    <CardFrame>
      <Bookmark active={props.bookmark} onClick={props.onBookmarkClick} />
      <CardImage src={props.source} alt={props.name} />
      <CardTitle>{props.name}</CardTitle>
      <TextContainer>
        <CardLengthText>Length: {props.length} m</CardLengthText>
        <CardPrice>{props.price} Euro</CardPrice>
      </TextContainer>
    </CardFrame>
  );
}

Card.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
  length: PropTypes.string,
  price: PropTypes.string
};

export default Card;
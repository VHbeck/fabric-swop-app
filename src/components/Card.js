import React from "react";
import styled from "styled-components";

const CardFrame = styled.div`
  margin: 20px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
`;

const CardTitle = styled.p`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
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
  padding-bottom: 15px;
`;

function Card(props) {
  return (
    <CardFrame>
      <CardImage src={props.source} alt={props.name} />
      <CardTitle>{props.name}</CardTitle>
      <CardLengthText>Length: {props.length} m</CardLengthText>
      <CardPrice>{props.price} Euro</CardPrice>
    </CardFrame>
  );
}

export default Card;

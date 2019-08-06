import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import PropTypes from "prop-types";
import GreyButton from "../components/GreyButton";
import { Link } from "react-router-dom";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 100px;
  h2 {
    text-align: center;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  align-self: center;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background: white;
  margin: 20px;
  padding: 20px;
  span {
    padding-bottom: 7px;
  }
`;

const PurchaseContainer = styled.div`
  background: white;
  margin: 10px 20px 20px 20px;
  padding: 20px;
  p {
    margin: 0px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

function Profile(props) {
  const yourPurchases = props.purchases;

  const purchaseArray =
    yourPurchases &&
    yourPurchases.map(element => {
      return {
        _id: element._id,
        day: element.purchaseDay,
        month: element.purchaseMonth,
        year: element.purchaseYear,
        name: element.name,
        price: element.price
      };
    });

  const purchaseList = purchaseArray.map(out => (
    <PurchaseContainer key={out._id}>
      <p>
        {out.day}.{out.month}.{out.year}: {out.name}, {out.price} Euro
      </p>
      <Link to="/details">
        <GreyButton
          text="Details"
          onClick={() => props.onDetailsClick(out._id)}
        />
      </Link>
      <br />
    </PurchaseContainer>
  ));
  console.log(purchaseArray);
  return (
    <>
      <Header headline="Profile" />
      <ProfileContainer>
        <StyledImage src="../../images/lou.jpg" alt="Vanessa" />
        <Description>
          <BoldText>Name:</BoldText>
          <span>Vanessa Harbeck</span>
          <BoldText>Address:</BoldText>
          <span>Gasstrasse 6A, Hamburg</span>
          <BoldText>Birthday:</BoldText>
          <span>01.02.1992</span>
          <BoldText>Sewing Machine:</BoldText>
          <span>Janome Anniversay</span>
          <BoldText>Favorite Fabric:</BoldText>
          <span>Cotton</span>
        </Description>
        <h2>Your Purchases</h2>
        {purchaseList}
      </ProfileContainer>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  purchases: PropTypes.array
};

export default Profile;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
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
  margin: 10px 20px 80px 20px;
  padding: 20px;
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
        name: element.name,
        price: element.price
      };
    });

  console.log(yourPurchases);
  const purchaseList = purchaseArray.map(out => <span>{out.name}</span>);
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
      </ProfileContainer>
      <PurchaseContainer>{purchaseList}</PurchaseContainer>
      <Footer />
    </>
  );
}

export default Profile;

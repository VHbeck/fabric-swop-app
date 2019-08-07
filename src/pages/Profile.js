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
  button {
    align-self: center;
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

const Logout = styled.span`
  align-self: center;
`;

function Profile(props) {
  const yourPurchases = props.purchases;
  const yourProfile = props.activeProfile;

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

  return (
    <>
      <Header headline="Profile" />
      <ProfileContainer>
        <StyledImage src="../../images/lou.jpg" alt="Vanessa" />
        <Description>
          <BoldText>Name:</BoldText>
          <span>
            {yourProfile.firstName} {yourProfile.lastName}
          </span>
          <BoldText>Address:</BoldText>
          <span>{yourProfile.address}</span>
          <BoldText>Birthday:</BoldText>
          <span>{yourProfile.birthday}</span>
          <BoldText>Sewing Machine:</BoldText>
          <span>{yourProfile.sewingMachine}</span>
          <BoldText>Favorite Fabric:</BoldText>
          <span>{yourProfile.favoriteFabric}</span>
        </Description>
        <h2>Your Purchases</h2>
        {purchaseList}
        <Logout>
          <Link to="login">
            <GreyButton text="Logout" onClick={() => props.onLogout()} />
          </Link>
        </Logout>
      </ProfileContainer>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  purchases: PropTypes.array,
  profiles: PropTypes.array
};

export default Profile;

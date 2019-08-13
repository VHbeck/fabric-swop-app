import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import PropTypes from "prop-types";
import GreyButton from "../components/GreyButton";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const StyledParagraph = styled.p`
  text-align: center;
`;

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
  object-fit: cover;
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

function Profile({ onLogout, onPayClick, profile, history }) {
  function onDetailsClick(id) {
    history.replace(`/details/${id}`);
  }

  const purchaseList = profile.purchases.map(out => {
    const date = new Date(out.purchaseDate);
    return (
      <PurchaseContainer key={out._id}>
        <p>
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}:{" "}
          {out.name}, {out.price} Euro
        </p>
        <GreyButton text="Details" onClick={() => onDetailsClick(out._id)} />
        <br />
      </PurchaseContainer>
    );
  });

  return (
    <>
      <Header headline={profile.username} />
      <ProfileContainer>
        <StyledImage src={profile.imageSource} alt="User Image" />
        <Description>
          <BoldText>Name:</BoldText>
          <span>
            {profile.firstName} {profile.lastName}
          </span>
          <BoldText>Address:</BoldText>
          <span>{profile.address}</span>
        </Description>
        <h2>Your Purchases</h2>
        {purchaseList}
        {purchaseList.length === 0 && (
          <StyledParagraph>You have nothing purchased yet.</StyledParagraph>
        )}
        <Logout>
          <Link to="login" data-cy="nav-logout">
            <GreyButton text="Logout" onClick={() => onLogout()} />
          </Link>
        </Logout>
      </ProfileContainer>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  activeProfile: PropTypes.object,
  profiles: PropTypes.array,
  onLogout: PropTypes.func
};

export default withRouter(Profile);

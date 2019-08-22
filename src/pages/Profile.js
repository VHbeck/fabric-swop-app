import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import PropTypes from "prop-types";
import GreyButton from "../components/GreyButton";
import { Link, withRouter } from "react-router-dom";

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
  margin: 10px 20px 10px 20px;
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

const ShoppingIcon = styled.div`
  font-size: 20px;
  align-self: center;
  text-align: center;
  color: #131426;
  margin-top: 20px;
`;

const ShoppingImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 20px;
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Profile({
  match,
  onLogout,
  onPayClick,
  profiles,
  history,
  activeProfile,
  cards
}) {
  const profile =
    profiles && profiles.find(profile => profile._id === match.params.id);

  if (!profile) {
    return null;
  }

  function onDetailsClick(id) {
    history.push(`/details/${id}`);
  }

  function handleBackClick() {
    history.goBack();
  }

  const purchaseList = profile.purchases.map(out => {
    const date = new Date(out.purchaseDate);
    return (
      <PurchaseContainer key={out._id}>
        <ShoppingContainer>
          <ShoppingImage src={out.source || "../../images/default-img.png"} />
          <span>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}:{" "}
            {out.name}, {out.price} Euro
          </span>
        </ShoppingContainer>
        <ButtonContainer>
          <GreyButton
            text="Details"
            onClick={() => onDetailsClick(out._id)}
            disabled={out.disable}
          />
          <GreyButton
            text="Pay now"
            onClick={() => onPayClick(out._id)}
            disabled={out.disable}
          />
        </ButtonContainer>
      </PurchaseContainer>
    );
  });

  const notification = cards.map(card =>
    card.vendorName === activeProfile.username && card.dis === true ? (
      <PurchaseContainer key={card._id + card.name}>
        <ShoppingContainer>
          <ShoppingImage src={card.source || "../../images/default.jpg"} />
          <span>
            You sold <BoldText>{card.name}</BoldText> for{" "}
            <BoldText>{card.price} Euro</BoldText> to{" "}
            <BoldText>{card.buyer}</BoldText>.<br /> Please send the fabric to
            following address:
            <br />
            <BoldText>{card.buyerAddress}</BoldText>
          </span>
        </ShoppingContainer>
      </PurchaseContainer>
    ) : (
      ""
    )
  );

  return (
    <>
      <Header headline={profile.username} />
      <ProfileContainer>
        <StyledImage
          src={profile.imageSource || "../../images/default.jpg"}
          alt="User Image"
        />
        <Description>
          <BoldText>Name:</BoldText>
          <span>
            {profile.firstName || "no name"} {profile.lastName}
          </span>
          <BoldText>Address:</BoldText>
          <span>{profile.address || "no address"}</span>
        </Description>
        {profile.username !== activeProfile.username ? (
          <GreyButton onClick={handleBackClick} text="Back" />
        ) : (
          ""
        )}
        {profile.username === activeProfile.username ? (
          <>
            <ShoppingIcon>
              <i className="fas fa-shopping-cart" />
              <BoldText> Shopping Cart</BoldText>
            </ShoppingIcon>
            {purchaseList}
            {purchaseList.length === 0 && (
              <StyledParagraph>You have nothing purchased yet.</StyledParagraph>
            )}
            <ShoppingIcon>
              <i className="fas fa-bell" />
              <BoldText> Notifications</BoldText>
            </ShoppingIcon>
            {notification}
            {notification[0] === "" && (
              <StyledParagraph>You have no more notifications.</StyledParagraph>
            )}
            <Logout>
              <Link to="login" data-cy="nav-logout">
                <GreyButton text="Logout" onClick={() => onLogout()} />
              </Link>
            </Logout>
          </>
        ) : (
          ""
        )}
      </ProfileContainer>
      <Footer profile={profile} />
    </>
  );
}

Profile.propTypes = {
  activeProfile: PropTypes.object,
  profiles: PropTypes.array,
  onLogout: PropTypes.func,
  onPayClick: PropTypes.func
};

export default withRouter(Profile);

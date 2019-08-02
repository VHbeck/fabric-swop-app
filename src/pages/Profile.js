import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 90vh;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  align-self: center;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px;
  background: white;
  margin: 20px 20px 90px 20px;
  padding: 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

function Profile() {
  return (
    <>
      <Header headline="Profile" />
      <ProfileContainer>
        <StyledImage src="../../images/lou.jpg" alt="Vanessa" />
        <Description>
          <BoldText>Name:</BoldText>
          <span>Vanessa</span>
          <BoldText>City:</BoldText>
          <span>Hamburg</span>
          <BoldText>Machine:</BoldText>
          <span>Janome Anniversay</span>
        </Description>
      </ProfileContainer>
      <Footer />
    </>
  );
}

export default Profile;

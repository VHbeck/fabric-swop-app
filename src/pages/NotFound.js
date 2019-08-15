import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreyButton from "../components/GreyButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

function NotFound({ profile }) {
  return (
    <>
      <Header headline="Not Found" />
      <NotFoundContainer>
        <p>Sorry, page not Found.</p>
        <Link to="/feed">
          <GreyButton text="Back" />
        </Link>
      </NotFoundContainer>
      <Footer profile={profile} />
    </>
  );
}

NotFound.propTypes = {
  profile: PropTypes.object
};

export default NotFound;

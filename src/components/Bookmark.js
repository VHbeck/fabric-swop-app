import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BookmarkStyled = styled.div`
  position: absolute;
  right: 20px;
  margin: 7px;
  font-size: 30px;
  color: ${p => (p.active ? "#ff979a" : "white")};
`;

function Bookmark({ active, onClick }) {
  return (
    <BookmarkStyled active={active} onClick={onClick}>
      <i className="fas fa-heart" />
    </BookmarkStyled>
  );
}

Bookmark.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default Bookmark;

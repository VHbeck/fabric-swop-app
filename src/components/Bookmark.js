import React from "react";
import styled from "styled-components";

const BookmarkStyled = styled.div`
  position: absolute;
  right: 20px;
  font-size: 30px;
  color: ${p => (p.active ? "#ff979a" : "#131426")};
`;

function Bookmark(props) {
  return (
    <BookmarkStyled active={props.active} onClick={props.onClick}>
      <i className="far fa-heart" />
    </BookmarkStyled>
  );
}

export default Bookmark;

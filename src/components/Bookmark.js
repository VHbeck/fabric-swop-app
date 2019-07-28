import React from "react";
import styled from "styled-components";

const BookmarkStyled = styled.div`
  position: absolute;
  right: 20px;
  font-size: 30px;
  color: ${p => (p.active ? "crimson" : "black")};
`;

function Bookmark() {
  const [BookmarkState, SetBookmarkState] = React.useState(false);

  function handleBookmarkClick() {
    SetBookmarkState(BookmarkState === true ? false : true);
  }

  return (
    <BookmarkStyled active={BookmarkState} onClick={handleBookmarkClick}>
      <i class="far fa-heart" />
    </BookmarkStyled>
  );
}

export default Bookmark;

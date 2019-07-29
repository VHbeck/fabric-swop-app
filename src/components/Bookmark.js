import React from "react";
import styled from "styled-components";

const BookmarkStyled = styled.div`
  position: absolute;
  right: 20px;
  font-size: 30px;
  color: ${p => (p.active ? "#ff979a" : "#131426")};
`;

function Bookmark(props) {
  const [BookmarkState, SetBookmarkState] = React.useState(false);

  function handleBookmarkClick() {
    SetBookmarkState(BookmarkState === true ? false : true);
  }
  console.log(BookmarkState);
  return (
    <BookmarkStyled
      active={props.bookmark === "true" ? props.bookmark : BookmarkState}
      onClick={handleBookmarkClick}
    >
      <i className="far fa-heart" />
    </BookmarkStyled>
  );
}

export default Bookmark;
/*
<BookmarkStyled
      active={props.bookmark === "true" ? props.bookmark : BookmarkState}
      onClick={handleBookmarkClick}
    >
      <i className="far fa-heart" />
    </BookmarkStyled>
    */

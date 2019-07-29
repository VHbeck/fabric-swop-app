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
  //console.log(props.bookmark);
  return (
    <BookmarkStyled active={BookmarkState} onClick={handleBookmarkClick}>
      <i className="far fa-heart" />
    </BookmarkStyled>
  );
}

export default Bookmark;

/* active={() =>
        (props.bookmark && SetBookmarkState(props.bookmark)) || BookmarkState
      }
      */

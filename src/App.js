import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";
import { getCardFromStorage, setCardToStorage } from "./utils/Storage";
const dummy = require("./models/items.json");

function App(props) {
  const [cards, setCards] = React.useState(getCardFromStorage() || dummy);
  const [detailPage, setDetailPage] = React.useState("");

  React.useEffect(() => {
    setCardToStorage(cards);
  }, [cards]);

  function handleBookmarkChange(id) {
    const index = cards.findIndex(card => card._id === id);
    const card = cards[index];

    setCards([
      ...cards.slice(0, index),
      { ...card, bookmark: !card.bookmark },
      ...cards.slice(index + 1)
    ]);
  }

  function handleCreate(items) {
    setCards([items, ...cards]);
  }

  function handleDetailsClick(index) {
    const detail = cards[index];
    setDetailPage(detail);
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <List
                cards={cards}
                onBookmark={handleBookmarkChange}
                onDetailsClick={handleDetailsClick}
              />
            )}
          />
          <Route
            path="/create"
            exact
            render={props => <Create cards={cards} onCreate={handleCreate} />}
          />
          <Route
            path="/search"
            exact
            render={props => (
              <Search
                cards={cards}
                onDetailsClick={handleDetailsClick}
                onBookmark={handleBookmarkChange}
              />
            )}
          />
          <Route path="/profile" exact render={props => <Profile />} />
          <Route
            path="/favorite"
            exact
            render={props => (
              <Favorite
                cards={cards}
                onDetailsClick={handleDetailsClick}
                onBookmark={handleBookmarkChange}
              />
            )}
          />
          <Route
            path="/details"
            exact
            render={props => <Details cards={detailPage} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

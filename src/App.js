import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";
import {
  getCardFromStorage,
  setCardToStorage,
  getPurchaseFromStorage,
  setPurchaseToStorage
} from "./utils/Storage";
const dummy = require("./models/items.json");

function App(props) {
  const [cards, setCards] = React.useState(getCardFromStorage() || dummy);
  const [detailPage, setDetailPage] = React.useState("");
  const [purchases, setPurchases] = React.useState(
    getPurchaseFromStorage() || []
  );

  React.useEffect(() => {
    setCardToStorage(cards);
  }, [cards]);

  React.useEffect(() => {
    setPurchaseToStorage(purchases);
  }, [purchases]);

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

  function handleDetailsClick(id) {
    const index = cards.findIndex(card => card._id === id);
    const detail = cards[index];
    setDetailPage(detail);
  }

  function handleBuyClick(id) {
    const index = cards.findIndex(card => card._id === id);
    const purchase = cards[index];
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    setPurchases([
      {
        ...purchase,
        purchaseDay: day,
        purchaseMonth: month + 1,
        purchaseYear: year
      },
      ...purchases
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Login />} />
          <Route
            path="/feed"
            exact
            render={props => (
              <List
                cards={cards}
                onBookmark={handleBookmarkChange}
                onDetailsClick={handleDetailsClick}
                onBuyClick={handleBuyClick}
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
          <Route
            path="/profile"
            exact
            render={props => (
              <Profile
                purchases={purchases}
                onDetailsClick={handleDetailsClick}
              />
            )}
          />
          <Route
            path="/favorite"
            exact
            render={props => (
              <Favorite
                cards={cards}
                onDetailsClick={handleDetailsClick}
                onBookmark={handleBookmarkChange}
                onBuyClick={handleBuyClick}
              />
            )}
          />
          <Route
            path="/details"
            exact
            render={props => (
              <Details cards={detailPage} onBuyClick={handleBuyClick} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

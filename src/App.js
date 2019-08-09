import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";
import ScrollToTop from "./utils/ScrollToTop";
import { getFromStorage, setToStorage } from "./utils/Storage";
const dummyCards = require("./models/items.json");
const dummyProfiles = require("./models/profiles.json");

function App() {
  const [cards, setCards] = React.useState(
    getFromStorage("Card") || dummyCards
  );
  const [profiles, setProfiles] = React.useState(
    getFromStorage("Profile") || dummyProfiles
  );
  const [activeProfile, setActiveProfile] = React.useState(
    getFromStorage("ActiveProfile") || dummyProfiles
  );

  const [purchases, setPurchases] = React.useState(
    getFromStorage("Purchase") || []
  );

  React.useEffect(() => {
    const name = "Card";
    setToStorage(name, cards);
  }, [cards]);

  React.useEffect(() => {
    const name = "Purchase";
    setToStorage(name, purchases);
  }, [purchases]);

  React.useEffect(() => {
    const name = "Profile";
    setToStorage(name, profiles);
  }, [profiles]);

  React.useEffect(() => {
    const name = "ActiveProfile";
    setToStorage(name, activeProfile);
  }, [activeProfile]);

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

  function handleCreateProfile(items) {
    setProfiles([items, ...profiles]);
    setActiveProfile(items);
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

  function handleLoginClick(username) {
    const index = profiles.findIndex(profile => profile.username === username);
    const profile = profiles[index];
    setActiveProfile(profile);
  }

  function handleLogoutClick() {
    setActiveProfile("");
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact render={props => <Start {...props} />} />
            <Route
              path="/feed"
              exact
              render={props => (
                <Feed
                  cards={cards}
                  onBookmark={handleBookmarkChange}
                  onBuyClick={handleBuyClick}
                  {...props}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={props => (
                <Login
                  onLogin={handleLoginClick}
                  activeProfile={activeProfile}
                  {...props}
                />
              )}
            />
            <Route
              path="/register"
              exact
              render={props => (
                <Register onCreateProfile={handleCreateProfile} {...props} />
              )}
            />
            <Route
              path="/create"
              exact
              render={props => (
                <Create cards={cards} onCreate={handleCreate} {...props} />
              )}
            />
            <Route
              path="/search"
              exact
              render={props => (
                <Search
                  cards={cards}
                  onBookmark={handleBookmarkChange}
                  {...props}
                />
              )}
            />
            <Route
              path="/profile"
              exact
              render={props => (
                <Profile
                  purchases={purchases}
                  activeProfile={activeProfile}
                  onLogout={handleLogoutClick}
                  {...props}
                />
              )}
            />
            <Route
              path="/favorite"
              exact
              render={props => (
                <Favorite
                  cards={cards}
                  onBookmark={handleBookmarkChange}
                  onBuyClick={handleBuyClick}
                />
              )}
            />
            <Route
              path="/details/:id"
              exact
              render={props => (
                <Details cards={cards} onBuyClick={handleBuyClick} {...props} />
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

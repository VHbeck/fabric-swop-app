import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import CreateArticle from "./pages/CreateArticle";
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
    getFromStorage("ActiveProfile") || dummyProfiles[0]
  );

  React.useEffect(() => {
    setToStorage("Card", cards);
  }, [cards]);

  React.useEffect(() => {
    setToStorage("Profile", profiles);
  }, [profiles]);

  React.useEffect(() => {
    setToStorage("ActiveProfile", activeProfile);
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

  function handleCreate(card) {
    setCards([card, ...cards]);
  }

  function handleCreateProfile(profile) {
    setProfiles([profile, ...profiles]);
    setActiveProfile(profile);
  }

  function handleBuyClick(id) {
    const index = cards.findIndex(card => card._id === id);
    const purchase = cards[index];
    const userIndex = profiles.findIndex(
      user => user._id === activeProfile._id
    );
    const user = profiles[userIndex];
    const userPurchases = user.purchases;
    const newProfile = {
      ...user,
      purchases: [
        {
          ...purchase,
          purchaseDate: new Date().toISOString()
        },
        ...userPurchases
      ]
    };

    setProfiles([
      ...profiles.slice(0, index),
      newProfile,
      ...profiles.slice(index + 1)
    ]);
    setActiveProfile(newProfile);

    setCards([
      ...cards.slice(0, index),
      { ...purchase, dis: !dis },
      ...cards.slice(index + 1)
    ]);
  }

  function handleLoginClick(username) {
    const index = profiles.findIndex(profile => profile.username === username);
    const profile = profiles[index];
    setActiveProfile(profile);
  }

  function handleLogoutClick() {
    setActiveProfile({});
  }

  function handlePayClick(id) {
    const index = cards.findIndex(card => card._id === id);
    setCards([...cards.splice(0, index), ...cards.splice(index + 1)]);
  }

  let dis = false;

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
                  dis={dis}
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
              path="/create-article"
              exact
              render={props => (
                <CreateArticle onCreate={handleCreate} {...props} />
              )}
            />
            <Route
              path="/search"
              exact
              render={props => (
                <Search
                  cards={cards}
                  onBookmark={handleBookmarkChange}
                  onBuyClick={handleBuyClick}
                  dis={dis}
                  {...props}
                />
              )}
            />
            <Route
              path="/profile"
              exact
              render={props => (
                <Profile
                  profile={activeProfile}
                  onLogout={handleLogoutClick}
                  onPayClick={handlePayClick}
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
                  dis={dis}
                />
              )}
            />
            <Route
              path="/details/:id"
              exact
              render={props => (
                <Details
                  cards={cards}
                  onBuyClick={handleBuyClick}
                  dis={dis}
                  {...props}
                />
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

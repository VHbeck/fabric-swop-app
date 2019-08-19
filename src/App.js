import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
import { getCards, postCard, patchCard } from "./services";

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
    getFromStorage("ActiveProfile") || {}
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
    postCard(card).then(result => setCards([result, ...cards]));
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
      ...profiles.slice(0, userIndex),
      newProfile,
      ...profiles.slice(userIndex + 1)
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
    alert("You payed your purchase!");
    const profileIndex = profiles.findIndex(
      profile => profile._id === activeProfile._id
    );
    const profile = profiles[profileIndex];
    const profilePurchases = profile.purchases;
    const purchaseIndex = profilePurchases.findIndex(
      purchase => purchase._id === id
    );
    const purchase = profilePurchases[purchaseIndex];
    const disabledPurchase = [
      ...profilePurchases.slice(0, purchaseIndex),
      { ...purchase, disable: true, ...purchase },
      ...profilePurchases.slice(purchaseIndex + 1)
    ];
    const updatedProfile = { ...profile, purchases: disabledPurchase };
    setActiveProfile(updatedProfile);
    setProfiles([
      ...profiles.slice(0, profileIndex),
      updatedProfile,
      ...profiles.slice(profileIndex + 1)
    ]);
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
              render={props =>
                activeProfile.username ? (
                  <Feed
                    cards={cards}
                    onBookmark={handleBookmarkChange}
                    onBuyClick={handleBuyClick}
                    dis={dis}
                    profile={activeProfile}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
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
              render={props =>
                activeProfile.username ? (
                  <CreateArticle
                    onCreate={handleCreate}
                    profile={activeProfile}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/search"
              exact
              render={props =>
                activeProfile.username ? (
                  <Search
                    cards={cards}
                    onBookmark={handleBookmarkChange}
                    onBuyClick={handleBuyClick}
                    dis={dis}
                    profile={activeProfile}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/profile/:id"
              exact
              render={props =>
                activeProfile.username ? (
                  <Profile
                    profiles={profiles}
                    onLogout={handleLogoutClick}
                    onPayClick={handlePayClick}
                    activeProfile={activeProfile}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/favorite"
              exact
              render={props =>
                activeProfile.username ? (
                  <Favorite
                    cards={cards}
                    onBookmark={handleBookmarkChange}
                    onBuyClick={handleBuyClick}
                    profile={activeProfile}
                    dis={dis}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/details/:id"
              exact
              render={props =>
                activeProfile.username ? (
                  <Details
                    cards={cards}
                    onBuyClick={handleBuyClick}
                    dis={dis}
                    profile={activeProfile}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

/*<Route
              render={props =>
                activeProfile.username ? (
                  <NotFound profile={activeProfile} {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            
            */

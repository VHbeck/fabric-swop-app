import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";
import { getCardFromStorage, setCardToStorage } from "./utils/Storage";
const dummy = require("./models/items.json");

function App(props) {
  const [cards, setCards] = React.useState(getCardFromStorage() || dummy);
  React.useEffect(() => {
    setCardToStorage(cards);
  }, [cards]);

  function handleBookmarkChange(index) {
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

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <List cards={cards} onBookmark={handleBookmarkChange} />
            )}
          />
          <Route
            path="/create"
            exact
            render={props => <Create cards={cards} onCreate={handleCreate} />}
          />
          <Route
            path="/favorite"
            exact
            render={props => <Favorite cards={cards} />}
          />
          <Route path="/details" exact render={props => <Details />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

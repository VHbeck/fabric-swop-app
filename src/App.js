import React from "react";
import GlobalStyle from "./misc/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/create" exact component={Create} />
          <Route path="/favorite" exact component={Favorite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

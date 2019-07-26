import React from "react";
import "./App.css";
import GlobalStyle from "./misc/GlobalStyle";
import Headline from "./components/Headline";

function App() {
  return (
    <>
      <GlobalStyle />
      <Headline>Fabric Swop</Headline>
      <div className="App">hello</div>
    </>
  );
}

export default App;

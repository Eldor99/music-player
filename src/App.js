import React from "react";
// Import styles
import "./styles/App.scss";
// Import components
import Player from "./components/Player";
import Song from "./components/Song";
// Import utils
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;

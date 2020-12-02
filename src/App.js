import React, { useState } from "react";
// Import styles
import "./styles/App.scss";
// Import components
import Player from "./components/Player";
import Song from "./components/Song";
// Import utils
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;

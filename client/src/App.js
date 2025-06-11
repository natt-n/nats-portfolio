import React from "react";
import "./App.css";
import pixelArt from "./assets/purple-heart.png";

function App() {
  return (
    <div className="main-container">
      <div className="under-construction">
        🚧 Under Construction – Check back soon! 🛠️
      </div>
      <img src={pixelArt} alt="Purple Heart" className="purple-heart" />
    </div>
  );
}

export default App;

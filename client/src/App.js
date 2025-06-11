import React from "react";
import "./App.css";
import purpleHeart from "./assets/purple-heart.png";

function App() {
  return (
    <div className="main-container">
      <img src={purpleHeart} alt="Pixel Heart" className="purple-heart" />
    </div>
  );
}

export default App;

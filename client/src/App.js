import React, { useState } from "react";
import "./App.css";
import pixelArt from "./assets/purple-heart.png";
import Lockscreen from "./components/Lockscreen/Lockscreen"; // 👈 updated name

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="main-container">
      {!isUnlocked && <Lockscreen onUnlock={() => setIsUnlocked(true)} />}
      
      <div className={`under-construction jersey-20-regular`}>
        🚧 Under Construction – Check back soon! 🛠️
      </div>

      <img src={pixelArt} alt="Purple Heart" className="purple-heart" />

    </div>
  );
}

export default App;

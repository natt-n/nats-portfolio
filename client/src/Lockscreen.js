import React, { useState } from "react";
import "./Lockscreen.css";

function Lockscreen({ onUnlock }) {
  const [isSwiping, setIsSwiping] = useState(false);

  const handleUnlock = () => {
    setIsSwiping(true);
    setTimeout(onUnlock, 700); // match the swipe-up animation duration
  };

  return (
    <div
      className={`lockscreen ${isSwiping ? "swipe-up" : ""}`}
      onClick={handleUnlock}
    >
      <div className="lock-time">9:41</div>
      <div className="swipe-up-text"> Touch to unlock</div>
    </div>
  );
}

export default Lockscreen;

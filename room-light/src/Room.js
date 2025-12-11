import React, { useState } from "react";
import LightSwitch from "./LightSwitch";
import "./App.css";

function Room() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="room"
      style={{
        backgroundColor: isLightOn ? "#fff8e1" : "#121212",
        color: isLightOn ? "#000000" : "#ffffff",
      }}
    >
      <h1>{isLightOn ? "The room is bright 💡" : "The room is dark 🌙"}</h1>
      <LightSwitch isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;


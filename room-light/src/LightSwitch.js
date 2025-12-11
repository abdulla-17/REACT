import React from "react";

function LightSwitch({ isLightOn, toggleLight }) {
  return (
    <button
      className={isLightOn ? "on" : "off"}
      onClick={toggleLight}
    >
      {isLightOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;


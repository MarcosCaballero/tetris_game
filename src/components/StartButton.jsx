import React from "react";
import "./Styles/StartButton.css";

const StartButton = ({ callback }) => {
  return (
    <button className="start-button" onClick={callback}>
      Start Game
    </button>
  );
};

export default StartButton;

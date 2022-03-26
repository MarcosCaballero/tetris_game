import React from "react";
import { TETROMINOS } from "../helpers/tetrominos";
import "./Styles/Cell.css";

const Cell = React.memo(({ type }) => {
  return (
    <div
      className="cell"
      style={{
        borderWidth: "3px",
        background: `rgba(${TETROMINOS[type].color}, 0.8)`,
        border: type === 0 ? "0px solid" : "4px solid",
        borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.1)`,
        borderRightColor: ` rgba(${TETROMINOS[type].color}, 1)`,
        borderTopColor: `rgba(${TETROMINOS[type].color}, 1)`,
        borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.3)`,
      }}
    ></div>
  );
});

export default Cell;

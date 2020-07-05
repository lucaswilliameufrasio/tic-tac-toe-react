import React from "react";
import Square from "../Square";

import './styles.css';

function Board({ squares, onClick }) {
  return (
    <div className="squaresContainer">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;

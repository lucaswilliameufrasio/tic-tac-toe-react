import React from "react";
import Square from "../Square";

import styles from './styles';

function Board({ squares, onClick }) {
  return (
    <div style={styles.squaresContainer}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;

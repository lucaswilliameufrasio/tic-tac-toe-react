import React, { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../helpers/calculateWinner";

import styles from "./styles";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);

  function handleClick(index) {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    //If user click on occupied square or if game is won, return
    if (winner || squares[index]) return;

    // Put an X or an O in the clicked square
    squares[index] = xIsNext ? "X" : "O";

    // Add the most recent state
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);

    setXisNext(!xIsNext);
  }

  function jumpTo() {}

  function renderMoves() {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles.winner}>
        <p>
          {winner ? `Winner ${winner}` : `Next player ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;

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

  function jumpTo(step) {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  function renderMoves() {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  }

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
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

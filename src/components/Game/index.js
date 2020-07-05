import React, { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../helpers/calculateWinner";

import styles from "./styles";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    const boardCopy = [...board];

    //If user click on occupied square or if game is won, return
    if (winner || boardCopy[index]) return;

    // Put an X or an O in the clicked square
    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
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

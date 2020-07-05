import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Home } from 'react-feather';

import Board from "../../Board";

import { calculateWinner } from "../../../helpers/calculateWinner";

import "./styles.css";

function Normal() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const history = useHistory();

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

  function resetMoves() {
    setBoard(Array(9).fill(null));
    setXisNext(winner === 'X');
  }

  function renderMoves() {
    return (
      <button onClick={resetMoves}>Start Game</button>
    );
  }

  function navigateToHome() {
    history.push("/");
  }

  return (
    <>
      <div className="homeButtonContainer">
        <button className="homeButton" onClick={navigateToHome}><Home /> Voltar para o Menu</button>
      </div>

      <div className="boardContainer">
        <Board squares={board} onClick={handleClick} />

        <div className="winner">
          <p>
            {winner ? `Winner ${winner}` : `Next player ${xIsNext ? "X" : "O"}`}
          </p>
          {renderMoves()}
        </div>
      </div>
    </>
  );
}

export default Normal;

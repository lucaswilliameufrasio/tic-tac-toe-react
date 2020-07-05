import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Home } from "react-feather";

import Board from "../../../components/Board";

import { calculateWinner } from "../../../helpers/calculateWinner";

import "./styles.css";

function TimeTravel() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const routeHistory = useHistory();

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
        <option key={move} onClick={() => jumpTo(move)} value={move}>{destination}</option>
      );
    });
  }

  function navigateToHome() {
    routeHistory.push("/");
  }

  return (
    <>
      <div className="homeButtonContainer">
        <button className="homeButton" onClick={navigateToHome}><Home /> Voltar para o Menu</button>
      </div>

      <div className="boardContainer">
        <Board squares={history[stepNumber]} onClick={handleClick} />

        <div className="winner">
          <p>
            {winner ? `Winner ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
          </p>

          <select className="moveSelector" value={stepNumber} onChange={event => jumpTo(event.target.value)} name="moves">
            {renderMoves()}
          </select>
        </div>
      </div>
    </>
  );
}

export default TimeTravel;

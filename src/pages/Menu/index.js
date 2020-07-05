import React from 'react';

import './styles.css';
import { useHistory } from 'react-router-dom';

function Menu() {
  const history = useHistory();

  function handleStartNormalGame(event){
    event.preventDefault();
    
    history.push('/normal-game')
  }

  function handleStartTimeTravelGame(event){
    event.preventDefault();

    history.push('/time-travel-game')
  }

  return (
      <div className="container">
          <button onClick={handleStartNormalGame}>Start Normal Game</button>
          <button onClick={handleStartTimeTravelGame}>Start Game with Time Travel</button>
      </div>
  );
}

export default Menu;
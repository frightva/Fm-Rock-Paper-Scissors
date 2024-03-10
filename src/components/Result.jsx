import React from 'react';
import MovePaper from './MovePaper';
import MoveRock from './MoveRock';
import MoveScissors from './MoveScissors';

function Result({ pMove, setPMove, houseMove, setGameIsActive, resultOutput }) {


  const handlePlayAgain = () => {
    setPMove('')
    setGameIsActive(true)
  }

  return (
    <>
      <div className="move-container result-container">
        <div className="flex-space mobile-grid">
          <div className='move-box player-move'>
            <h1 className='desktop-h1'>YOU PICKED</h1>
              {pMove === 'Paper' && <MovePaper />}
              {pMove === 'Rock' && <MoveRock />}
              {pMove === 'Scissors' && <MoveScissors />}
            <h1 className='mobile-h1'>YOU PICKED</h1>
            {resultOutput === 'YOU WIN' && <div className="background-light"></div>}
          </div>
          <div className='result'>
            <h1>{resultOutput}</h1>
            <button onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
          </div>
          <div className='move-box house-move'>
            <h1 className='desktop-h1'>THE HOUSE PICKED</h1>
            <div className='shadow-box'>
              <div className="btn-wrapper">
                {houseMove === 'Paper' && <MovePaper />}
                {houseMove === 'Rock' && <MoveRock />}
                {houseMove === 'Scissors' && <MoveScissors />}
                {resultOutput === 'YOU LOSE' && <div className="background-light-2"></div>}
              </div>
            </div>
            <h1 className='mobile-h1'>THE HOUSE PICKED</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
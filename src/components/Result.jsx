import React from 'react'
import MovePaper from './MovePaper'
import MoveRock from './MoveRock'
import MoveScissors from './MoveScissors'

function Result({ iconPaper, iconRock, iconScissors, pMove, houseMove }) {
  
  console.log(pMove)
  console.log(houseMove)

  return (
    <>
      <div className="move-container result-container">
        <div className="flex-space">
          <div className='move-box'>
            <h1>YOU PICKED</h1>
            {pMove === 'Paper' && <MovePaper />}
            {pMove === 'Rock' && <MoveRock />}
            {pMove === 'Scissors' && <MoveScissors />}

          </div>
          <div className='move-box'>
            <h1>THE HOUSE PICKED</h1>
            <div className='shadow-box'>
              <div className="btn-wrapper">
              {houseMove === 'Paper' && <MovePaper />}
              {houseMove === 'Rock' && <MoveRock />}
              {houseMove === 'Scissors' && <MoveScissors />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
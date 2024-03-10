import React from 'react'
import moveScissors from '../../src/images/icon-Scissors.svg'

function MoveScissors() {
  return (
  <button className='move-btn btn2 show-results'>
    <img src={moveScissors} alt="" />
  </button>
  )
}

export default MoveScissors
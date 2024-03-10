import React from 'react'
import moveRock from '../../src/images/icon-Rock.svg'

function MoveRock() {
  return (
  <button className='move-btn btn3 show-results'>
    <img src={moveRock} alt="" />
  </button>
  )
}

export default MoveRock
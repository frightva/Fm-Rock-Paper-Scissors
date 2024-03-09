import React, { useState } from 'react'

function Moves({ handleGame,pMove,bgTriangle, iconPaper, iconRock, iconScissors }) {

  const [paper, setPaper] = useState(true)
  const [rock, setRock] = useState(true)
  const [scissors, setScissors] = useState(true)
  const [bg, setBg] = useState(true)

  const isClicked = (move) => {
    handleGame(move)
    if(move === 'Paper') {
      setPaper(true)
      setRock(false)
      setScissors(false)
    } 
    if (move === 'Rock') {
      setPaper(false)
      setRock(true)
      setScissors(false)
    }

    if(move === 'Scissors') {
      setPaper(false)
      setRock(false)
      setScissors(true)
    }
    setBg(false)
  }

  return (
    <>
    <img className='bg-img' style={bg ? {'opacity': '1'} : {'opacity': '0', 'transition': 'opacity 1s'}} src={bgTriangle} alt="" />
    <div className="move-container">
      <div className="flex-space">
        <div className={pMove === 'Paper' ? 'move-box animate-move' : 'move-box'} style={paper ? {'opacity': '1'} : {'opacity': '0', 'transition': 'opacity 1s'}}>
          <button onClick={() => isClicked('Paper')} className='move-btn btn1'>
            <img src={iconPaper} alt="" />
          </button>
        </div>
        <div className={pMove === 'Scissors' ? 'move-box animate-move' : 'move-box'} style={scissors ? {'opacity': '1'} : {'opacity': '0', 'transition': 'opacity 1s'}}>
          <button onClick={() => isClicked('Scissors')} className='move-btn btn2'>
            <img src={iconScissors} alt="" />
          </button>
        </div>
      </div>
      <div className="flex-center">
        <div className={pMove === 'Rock' ? 'move-box animate-move' : 'move-box'} style={rock ? {'opacity': '1'} : {'opacity': '0', 'transition': 'opacity 1s'}}>
          <button onClick={(e) => isClicked('Rock')} className='move-btn btn3'>
            <img src={iconRock} alt="" />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Moves
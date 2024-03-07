import React from 'react'

function Moves({ bgTriangle, iconPaper, iconRock, iconScissors }) {
  return (
    <>
    <img className='bg-img' src={bgTriangle} alt="" />
    <div className="move-container">
      <div className="flex-space">
        <div className='move-box animate-move'>
          <button className='move-btn btn1 '>
            <img src={iconPaper} alt="" />
          </button>
        </div>
        <div className='move-box animate-move'>
          <button className='move-btn btn2'>
            <img src={iconScissors} alt="" />
          </button>
        </div>
      </div>
      <div className="flex-center">
        <div className='move-box animate-move'>
          <button className='move-btn btn3'>
            <img src={iconRock} alt="" />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Moves
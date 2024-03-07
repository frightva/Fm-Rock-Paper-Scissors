import React from 'react'

function Result({ iconPaper, iconRock, iconScissors }) {
  return (
    <>
      <div className="move-container result-container">
        <div className="flex-space">
          <div className='move-box'>
            <h1>YOU PICKED</h1>
            <button className='move-btn btn1 show-results'>
              <img src={iconPaper} alt="" />
            </button>
          </div>
          <div className='move-box'>
            <h1>THE HOUSE PICKED</h1>
            <div className='shadow-box'>
              <button className='move-btn btn2 show-results-house'>
                <img src={iconScissors} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
import './App.css';
import React, { useEffect, useState } from 'react'
import logo from './images/logo.svg'
import bgTriangle from './images/bg-triangle.svg'
import iconClose from './images/icon-close.svg'
import iconRock from './images/icon-rock.svg'
import iconPaper from './images/icon-paper.svg'
import iconScissors from './images/icon-scissors.svg'

function App() {

  // PlayerMove, ComputerMove, Results, Score
  const [pMove, setPMove] = useState('')
  const [houseMove, setHouseMove ]= useState('')
  const [resultOutput, setResultOutput] = useState('')
  const [scoreOutput, setScoreOutput] = useState(0)
  
  
  let computerMove = '';
  let result = '';

  
  
  const handleGame = (playerMove) => {
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = "Rock"
    } else if(randomNumber >=1/3 && randomNumber < 2/3){
      computerMove = "Paper"
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
      computerMove ="Scissors"
    }
    //Rock ~ >=0 - <1/3
    //Paper ~ >=1/3 - <2/3  
    //Scissors ~ >=2/3 - <1

    if(playerMove === 'Rock') {
      if(computerMove === 'Rock') {
        result = "Tie."
      } else if(computerMove === 'Paper') {
        result = "You Lose."
      } else if(computerMove === 'Scissors') {
        result = "You Win."
      }
    } else if(playerMove === 'Paper') {
      if(computerMove === 'Rock') {
        result = "You Win."
      } else if(computerMove === 'Paper') {
        result = "Tie."
      } else if(computerMove === 'Scissors') {
        result = "You Lose."
      }
    } else if(playerMove === 'Scissors') {
      if(computerMove === 'Rock') {
        result = "You Lose."
      } else if(computerMove === 'Paper') {
        result = "You Win."
      } else if(computerMove === 'Scissors') {
        result = "Tie."
      }
    }

    if(result === "You Win.") {
      setScoreOutput(scoreOutput + 1)
    } else if(result === "You Lose.") {
      setScoreOutput(scoreOutput - 1)
    }

    setPMove(playerMove)
    setHouseMove(computerMove)
    setResultOutput(result)   
  }

  return (
    <>
      <div className="container">
        <div className='column-one'>
          <div className="container-header">
            <div className='header-logo'>
              <img src={logo} alt="" />
            </div>
            <div className='header-score'>
              <p>SCORE</p>
              <p>12</p>
            </div>
          </div>
          <div className="container-body">
            <img className='bg-img' src={bgTriangle} alt="" />
            <div className="move-container">
              <div className="flex-space">
                <div className='move-box'>
                  <button className='move-btn btn1'>
                    <img src={iconPaper} alt="" />
                  </button>
                </div>
                <div className='move-box'>
                  <button className='move-btn btn2'>
                    <img src={iconScissors} alt="" />
                  </button>
                </div>
              </div>
              <div className="flex-center">
                <div className='move-box'>
                  <button className='move-btn btn3'>
                    <img src={iconRock} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='column-2'>
          <button className='btn'>RULES</button>
        </div>
      </div>
  </>
  );
}

export default App;

import './App.css';
import React, { useEffect, useState } from 'react'
import logo from './images/logo.svg'
import bgTriangle from './images/bg-triangle.svg'
import iconClose from './images/icon-close.svg'
import iconRock from './images/icon-Rock.svg'
import iconPaper from './images/icon-Paper.svg'
import iconScissors from './images/icon-Scissors.svg'
import Moves from './components/Moves';
import Result from './components/Result';
import Rules from './images/image-rules.svg'

function App() {

  // PlayerMove, ComputerMove, Results, Score
  const [pMove, setPMove] = useState('')
  const [houseMove, setHouseMove ]= useState('')
  const [resultOutput, setResultOutput] = useState('')
  const [scoreOutput, setScoreOutput] = useState(0)
  const [gameIsActive, setGameIsActive] = useState(true)
  const [rules, setRules] = useState(false)
  
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
        result = "DRAW"
      } else if(computerMove === 'Paper') {
        result = "YOU LOSE"
      } else if(computerMove === 'Scissors') {
        result = "YOU WIN"
      }
    } else if(playerMove === 'Paper') {
      if(computerMove === 'Rock') {
        result = "YOU WIN"
      } else if(computerMove === 'Paper') {
        result = "DRAW"
      } else if(computerMove === 'Scissors') {
        result = "YOU LOSE"
      }
    } else if(playerMove === 'Scissors') {
      if(computerMove === 'Rock') {
        result = "YOU LOSE"
      } else if(computerMove === 'Paper') {
        result = "YOU WIN"
      } else if(computerMove === 'Scissors') {
        result = "DRAW"
      }
    }

    if(result === "YOU WIN") {
      setTimeout(() => {
        setScoreOutput(scoreOutput + 1)
      }, 5500)
    } else if(result === "YOU LOSE") {
      setTimeout(() => {
        setScoreOutput(scoreOutput - 1)
      }, 5500)
    }

    setPMove(playerMove)
    setHouseMove(computerMove)
    setResultOutput(result)
    setTimeout(() => {
      setGameIsActive(false);
    }, 2000);
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
              <p>{scoreOutput}</p>
            </div>
          </div>
          <div className="container-body">
            {gameIsActive ?
            <Moves
              handleGame={handleGame}
              pMove={pMove}
              bgTriangle={bgTriangle}
              iconRock={iconRock}
              iconPaper={iconPaper}
              iconScissors={iconScissors} />
              :
             <Result
              pMove={pMove}
              setPMove={setPMove}
              houseMove={houseMove}
              resultOutput={resultOutput}
              setGameIsActive={setGameIsActive}
              iconRock={iconRock}
              iconPaper={iconPaper}
              iconScissors={iconScissors} /> 
            }    
          </div>
        </div>
        <div className='column-2'>
          {rules &&
          <div className='rules-container'>
            <div className="rules-box">
              <div className='flex-space'>
                <h1>RULES</h1>
                <button className='close-btn' onClick={() => setRules(false)}>
                  <img src={iconClose} alt="" />
                </button>
              </div>
              <img src={Rules} alt="" />
            </div>
          </div>}
          <button className='btn' disabled={rules} onClick={() => setRules(true)}>RULES</button>
        </div>
      </div>
  </>
  );
}

export default App;

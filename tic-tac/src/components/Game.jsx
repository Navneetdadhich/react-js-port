import React, { useState } from 'react'
import App from './App.jsx'
const Game = () => {
    const [xIsNext, setxIsNext] = useState(true);
    const [history, setHistory] = useState(Array(9).fill(null));
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        // TODO
      }

  return (
    <>
    <div className='flex flex-row'>
      <div className=''>
    <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='mx-20'>

      </div>
    </div>
    
    
    </>
  )
}

export default Game
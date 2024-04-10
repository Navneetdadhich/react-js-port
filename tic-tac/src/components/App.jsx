import Button from "./Button"
import { useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {

  

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

 

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
    nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    // console.log("winner " + winner);
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    
    <div className=" my-2 mx-2">
      <Button value={squares[0]} onbuttonClicked={() => handleClick(0)}/>
      <Button value={squares[1]} onbuttonClicked={() => handleClick(1)}/>
      <Button value={squares[2]} onbuttonClicked={() => handleClick(2)}/>
    </div>

    <div className=" my-2 mx-2">
      <Button value={squares[3]} onbuttonClicked={() => handleClick(3)}/>
      <Button value={squares[4]} onbuttonClicked={() => handleClick(4)}/>
      <Button value={squares[5]} onbuttonClicked={() => handleClick(5)}/>
    </div>

    <div className=" my-2 mx-2">
      <Button value={squares[6]} onbuttonClicked={() => handleClick(6)}/>
      <Button value={squares[7]} onbuttonClicked={() => handleClick(7)}/>
      <Button value={squares[8]} onbuttonClicked={() => handleClick(8)}/>
    </div>
    <div >status : {status}</div>
    </>
  )
}

export default App

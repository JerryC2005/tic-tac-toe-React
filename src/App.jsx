import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'

// function will check if there is a winner
function CalcWinner(squares) {
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

function Board({ xIsNext, squares, onPlay }) {

  // function will determine whether someone has won or who goes next
  function handleClick(i) {
    if(squares[i] || CalcWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }
  
  // will tell status of the game
  const winner = CalcWinner(squares)
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
    <div className='status'>{status}</div>
    <div className='board-row'>
      <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
      <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
      <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
    </div>

    <div className='board-row'>
      <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
      <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
      <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
    </div>

    <div className='board-row'>
      <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
      <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
      <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
    </div>
    </>
  )
}

// main game component
function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]) // store game history as array
  const [currentMove, setCurrentMove] = useState(0) // track current move
  const xIsNext = currentMove % 2 === 0 // determine whether x or o plays next
  const currentSquares = history[currentMove]; // get current board state

  // function to upd the game state when 
  function handlePlay(nextSquares) {
    // creates a new history up to the current move and add the new board state
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // move to latest move
  }

  //function to jump to a specific move in history
  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  // create move history buttons for time-travel functionality
  const moves = history.map((squares, move) => {
    let desc;
    if(move > 0) {
      desc = 'Go to move #' + move;
    } else {
      desc = 'Go to Game Start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  return (
    <>
    <div className='game'>
      <div className='game-board'>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
    </div>
    <div className='game-info'>
      <ol>{moves}</ol>{/*Display move history */}
    </div>

    </>
  )
}

export default App

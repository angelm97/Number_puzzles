import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 8, 7, null]);

  if (JSON.stringify(board) == '[1,2,3,4,5,6,7,8,null]') {
    alert('Yupiiii')
  }




  const nextToMe = (position, num) => {
    //if board size is 4 x 4 add -4 and +4 to toCheck
    const toCheck = [-1, -3, +1, +3];
    toCheck.forEach(res => {
      const result = position + res;
      if (result >= 0 && result < board.length) {

        if (board[result] == null) {
          const newBoard = [...board];
          newBoard[result] = num;
          newBoard[position] = null;
          setBoard(newBoard);
        }

      }
    })
  }

  return (

    <div className="container">

      <div className='title'>
        <p>Number Puzzles</p>
      </div>

      <div className='board'>

        {board.map((res, index) => {
          return <div className='cursor' onClick={() => nextToMe(index, res)} key={index}>{res}</div>
        })}
      </div>
    </div>
  )
}

export default App

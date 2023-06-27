import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from "canvas-confetti";





function App() {

  const [modal, setModal] = useState(false)
  const [board, setBoard] = useState([1, 5, 3, 7, 2, 6, 4, null, 8]);

  const showModal = () => {
    setModal(!modal)
  }

  const resetGame = () => {
    setBoard([1, 5, 3, 7, 2, 6, 4, null, 8])
    showModal()
  }

  const CheckWinner = (newBoard) => {
    if (JSON.stringify(newBoard) == '[1,2,3,4,5,6,7,8,null]') {
      confetti()
      setModal(true)
    }
  }

  const nextToMe = async (position, num) => {
    //if board size is 4 x 4 add -4 and +4 to toCheck
    const toCheck = [-1, -3, +1, +3];
    toCheck.forEach(res => {
      if ((position == 3 && res == -1 || position == 6 && res == -1) || (position == 2 && res == 1 || position == 5 && res == 1)) {}
      
      else{
        const result = position + res;
        if (result >= 0 && result < board.length) {
  
          if (board[result] == null) {
            const newBoard = [...board];
            newBoard[result] = num;
            newBoard[position] = null;
            setBoard(newBoard);
            CheckWinner(newBoard)
          }
  
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

      {modal && (

        <section className='winner'>
          <div className='text'>
            <h2>Congratulations </h2>

            <footer>
              <button onClick={resetGame}>Start again</button>
            </footer>
          </div>
        </section>
      )}


    </div>
  )
}

export default App

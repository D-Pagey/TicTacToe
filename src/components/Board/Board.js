import React from 'react';

import './Board.css';

function Board({ board, playerMove }) {
    return (
        <section className='board'>
          <div className='square one' data-value='0' onClick={() => playerMove(0)}>
            <p className='element'>{board[0]}</p>
          </div>
          <div className='square two' data-value='1' onClick={() => playerMove(1)}>
            <p className='element'>{board[1]}</p>
          </div>
          <div className='square three' data-value='2' onClick={() => playerMove(2)}>
              <p className='element'>{board[2]}</p>
          </div>
          <div className='square four' data-value='3' onClick={() => playerMove(3)}>
              <p className='element'>{board[3]}</p>
          </div>
          <div className='square five' data-value='4' onClick={() => playerMove(4)}>
              <p className='element'>{board[4]}</p>
          </div>
          <div className='square six' data-value='5' onClick={() => playerMove(5)}>
              <p className='element'>{board[5]}</p>
          </div>
          <div className='square seven' data-value='6' onClick={() => playerMove(6)}>
              <p className='element'>{board[6]}</p>
          </div>
          <div className='square eight' data-value='7' onClick={() => playerMove(7)}>
              <p className='element'>{board[7]}</p>
          </div>
          <div className='square nine' data-value='8' onClick={() => playerMove(8)}>
              <p className='element'>{board[8]}</p>
          </div>
        </section>
    )
}

export default Board;
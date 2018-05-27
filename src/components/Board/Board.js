import React from 'react';

import './Board.css';

function Board() {
    return (
        <section className='board'>
          <div className='square one' data-value='0'>
            <p className='element'></p>
          </div>
          <div className='square two' data-value='1'>
            <p className='element'></p>
          </div>
          <div className='square three' data-value='2'>
              <p className='element'></p>
          </div>
          <div className='square four' data-value='3'>
              <p className='element'></p>
          </div>
          <div className='square five' data-value='4'>
              <p className='element'></p>
          </div>
          <div className='square six' data-value='5'>
              <p className='element'></p>
          </div>
          <div className='square seven' data-value='6'>
              <p className='element'></p>
          </div>
          <div className='square eight' data-value='7'>
              <p className='element'></p>
          </div>
          <div className='square nine' data-value='8'>
              <p className='element'></p>
          </div>
        </section>
    )
}

export default Board;
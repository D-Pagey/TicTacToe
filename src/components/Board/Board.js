import React from 'react';

import './Board.css';

function Board() {
    return (
        <section class='board'>
          <div class='square one' data-value='0'>
            <p class='element'></p>
          </div>
          <div class='square two' data-value='1'>
            <p class='element'></p>
          </div>
          <div class='square three' data-value='2'>
              <p class='element'></p>
          </div>
          <div class='square four' data-value='3'>
              <p class='element'></p>
          </div>
          <div class='square five' data-value='4'>
              <p class='element'></p>
          </div>
          <div class='square six' data-value='5'>
              <p class='element'></p>
          </div>
          <div class='square seven' data-value='6'>
              <p class='element'></p>
          </div>
          <div class='square eight' data-value='7'>
              <p class='element'></p>
          </div>
          <div class='square nine' data-value='8'>
              <p class='element'></p>
          </div>
        </section>
    )
}

export default Board;
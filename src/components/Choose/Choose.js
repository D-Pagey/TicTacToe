import React from 'react';

import './Choose.css';

function Choose({chooseTeam, toggle}) {

  if (toggle) {
    return null;
  } else {
    return (
      <div className='choose-area'>
        <h2 className='choose-title'>Choose your team:</h2>
        <button className='choose-btn' onClick={chooseTeam}>X</button>
        <button className='choose-btn' onClick={chooseTeam}>O</button>
      </div>
    )
  }
}

export default Choose;

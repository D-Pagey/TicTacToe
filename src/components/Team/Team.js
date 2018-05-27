import React from 'react';

import './Team.css';

function Team() {
    return (
        <div className='team-area hidden' id='team-area'>
            <p className='teams'>Player: <span id='player'></span></p>
            <p className='teams'>Computer: <span id='computer'></span></p>
        </div>
    )
}

export default Team;
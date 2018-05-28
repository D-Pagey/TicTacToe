import React from 'react';

import './Team.css';

function Team({toggle, player, computer}) {

    if(toggle) {
        return (
            <div className='team-area' id='team-area'>
                <p className='teams'>Player: <span id='player'>{player}</span></p>
                <p className='teams'>Computer: <span id='computer'>{computer}</span></p>
            </div>
        )
    } else {
        return null;
    }

    
}

export default Team;
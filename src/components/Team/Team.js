import React from 'react';

import './Team.css';

function Team() {
    return (
        <div class='team-area hidden' id='team-area'>
            <p class='teams'>Player: <span id='player'></span></p>
            <p class='teams'>Computer: <span id='computer'></span></p>
        </div>
    )
}

export default Team;
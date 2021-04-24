import React, { useEffect } from 'react';

import API from '../../utils/API.js';

function MemoryGameOver({ userState }){
    useEffect(() => {
        console.log("Sending Stat")
        const stat = {
            flashcardVal: 0,
            challengeVal: 0,
            memoryVal: 1,
            date: new Date()
          };
          
          API.putStat(userState.userId, stat);
    }, [])

    return (
        <p>Game Over!</p>
    )
}

export default MemoryGameOver;

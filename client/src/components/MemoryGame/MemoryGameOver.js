import React, { useEffect } from 'react';

import API from '../../utils/API.js';

import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

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
        <Container style={{ width: '80%', height: '80%'}}> 

        <Link to='/'>
          <Button style={{marginBottom: '10px', width: '100%'}} basic color='red'>
            Exit
          </Button>
        </Link>
      </Container>
    )
}

export default MemoryGameOver;

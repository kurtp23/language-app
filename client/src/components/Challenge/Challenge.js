import React, { useEffect } from 'react';
import Choices from './Choices.js';

import EndGame from './EndGame.js';
import API from '../../utils/API.js';
import { Header, Container, Icon } from 'semantic-ui-react';

function Challenge({ category, language, userState }){
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameEnd, setGameEnd] = React.useState(false);
  const [choices, setChoices] = React.useState([])

  useEffect(() => {
    // get data from MongoDB
    API.getChallengeData(category)
      .then((data) => {

        let dataTransformed = [];
        data.data.forEach((data) => {
          dataTransformed.push({
            eng: data.eng,
            lang: data[language],
            rendered: false
          }); 
        });
  
        setData(dataTransformed);
      });

  }, [category]);

  useEffect(() => {
    
    setChoices(data.sort(function() { 
      return 0.5 - Math.random(); 
    }))
    
  }, [data, gameEnd])

  useEffect(() => {
    if (count > 4) {
      console.log("End Game Reached")
      setGameEnd(true);
      handleEndGame();

    }

  }, [count])

  function handleStatusChanges(ans) {
    console.log("Selection made, adding to score? ", ans)
    setCount(count + 1)

    if (ans) {setScore(score + 1)}
    setChoices([])
    setChoices(data.sort(function() { 
      return 0.5 - Math.random(); 
    }))
  }

  function handleEndGame(){
    console.log("Do something on endgame!")
    // send data to stats schema here
    const stat = {
      flashcardVal: 0,
      challengeVal: 100 * score / count,
      date: new Date()
    };
    
    console.log('This will go to stats schema: ', stat);
    API.putStat(userState.userId, stat);
  }

  function handleNextClick(){
    // this effectively gives the user the option to either EXIT or CONTINUE the game
    console.log("Handling Next")
    setCount(0)
    setScore(0)
    setChoices([])
    setGameEnd(false)
  }

  return (
    <>
      {gameEnd ? 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='book' />Nice Work!</Header></Container> : 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='question circle' />Match the Word to the Image!</Header></Container>
      }

      {!gameEnd && choices.length > 0 ? <Choices onStatusChange={handleStatusChanges} choices={choices} /> : <></>}
            
      {gameEnd ? <EndGame onContinue={handleNextClick} score={100 * score / count} category={category}/>: <></>}

        
    </>
  );
}

export default Challenge;

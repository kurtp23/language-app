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

  function handleStatusChanges(cat) {
    console.log("Going to iterate this category", cat)

    if (cat === 'count') {setCount(count + 1)}
    if (cat === 'score') {setScore(score + 1)}

    if (count > 4) {
      
      setGameEnd(true);
      handleEndGame();
    }

  }

  function handleEndGame(){
    console.log("Do something on endgame!")
    // send data to stats schema here
    const stat = {
      flashcardVal: 0,
      challengeVal: count,
      date: new Date()
    };
    
    console.log('This will go to stats schema: ', stat);
    API.putStat(userState.userId, stat);
  }

  function handleNextClick(){
    // this effectively gives the user the option to either EXIT or CONTINUE the game
    let newData = [...data];

    newData.forEach(item => {
      // make sure not to allow the same answer two times in a row
    
      item.rendered = false;

    });

    data.sort(function() { 
      return 0.5 - Math.random(); 
    });

  }

  console.log("this is the challenge data", data)

  return (
    <>
      {gameEnd ? 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='book' />Nice Work!</Header></Container> : 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='question circle' />Match the Word to the Image!</Header></Container>
      }

      {!gameEnd && data.length > 0 ? <Choices onStatusChange={handleStatusChanges} choices={data} /> : <></>}
            
      {gameEnd ? <EndGame onContinue={handleNextClick} count={count} category={category}/>: <></>}

        
    </>
  );
}

export default Challenge;

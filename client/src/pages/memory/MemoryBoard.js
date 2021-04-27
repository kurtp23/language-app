import React, { useEffect } from 'react';
import MemoryCard from '../../components/MemoryGame/MemoryCard.js';
import MemoryGameOver from '../../components/MemoryGame/MemoryGameOver.js';

import API from '../../utils/API.js';

import { Container, Header, Icon } from 'semantic-ui-react';

function MemoryBoard({ userState, category }) {
  const [fronts, setFronts] = React.useState([]);
  const [deck, setDeck] = React.useState([]);
  const [firstCard, setFirstCard] = React.useState(null)
  const [firstCardIndex, setFirstCardIndex] = React.useState(-1);
  const [gameEnd, setGameEnd] = React.useState(false)  

  useEffect(() => {
    // get data from MongoDB
    API.getChallengeData(category)
      .then((data) => {
        const dataRandom = data.data.sort(function() { 
          return 0.5 - Math.random(); 
        })

        setFronts(
          dataRandom.slice(0,5)
        )
      });

  }, [category]);



  useEffect(() => {
      const newDeck = [...fronts, ...fronts]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => {
          return {
          content: card[userState.language],
          keyName: card.eng,
          faceUp: false,
          index: index,
          };
      });
      setDeck(newDeck)
      setFirstCard(null)
  }, [fronts])

  useEffect(() => {
    if (deck.length > 0) {
      let faceDownCount = 0
      deck.forEach((card) => {
        if (!card.faceUp) {faceDownCount++}
      })

      if (faceDownCount === 0) {setGameEnd(true)}
    }
  }, [deck])


  function flipCardTo(cardIdx, faceUp) {

      setDeck(deck.map((card, i) => {
              if(i === cardIdx) {
                  return {
                    content: card.content,
                    keyName: card.keyName,
                    faceUp: faceUp,
                    index: cardIdx,
                  };
              } else {
                  return card;
              }
          })
      )
  }

  function flip(cardIdx) {
    
      if(firstCard === null) {
        
        setFirstCard(deck[cardIdx].content);
        setFirstCardIndex(cardIdx);

      } else {
        const firstCardContent = firstCard;
        const secondCardContent = deck[cardIdx].content;
        if(firstCardContent === secondCardContent) {
          setFirstCard(null);
          
        } else {
          
          setTimeout(() => {
          flipCardTo(cardIdx, false);
          }, 2000);

          setTimeout(() => {
            flipCardTo(firstCardIndex, false);
            setFirstCard(null);
            setFirstCardIndex(null);
          }, 2000);

        }
      }
  
      flipCardTo(cardIdx, !deck[cardIdx].faceUp);
    }
  
    const gameCards = deck.map((card, i) => {
      return (
        <MemoryCard
          key={i}
          index={card.index}
          imgKey={card.keyName}
          flip={flip}
          content={card.content}
          faceUp={card.faceUp} />
      )
    })


  return (
      <>
        {gameEnd ? 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='gamepad' />Thank you for Playing!</Header></Container> : 
        <Container textAlign='center'><Header className='ui orange header' as='h2'><Icon name='question circle outline' />Match Game!</Header></Container>
        }

        {gameEnd ? <MemoryGameOver userState={userState} /> : <></>}

        <div className="Board">
          {gameCards}
        </div>

      </>
  )
}

export default MemoryBoard;

import React, { useEffect } from 'react';
import MemoryCard from '../../components/MemoryGame/MemoryCard.js';

import API from '../../utils/API.js';

function MemoryBoard({ userState }) {
  const [fronts, setFronts] = React.useState([]);
  const [deck, setDeck] = React.useState([]);
  const [firstCard, setFirstCard] = React.useState(null)
  const [firstCardIndex, setFirstCardIndex] = React.useState(-1);
  
  useEffect(() => {
    const category = 'zooAnimals'

    API.getChallenges()
      .then((data) => {

        setFronts(
          data.data[0].data[category].slice(0,9)
        )

      })  

  }, [])

  useEffect(() => {
      const lang = userState.language
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
        <div className="Board">
          {gameCards}
        </div>)
      </>
  )
}

export default MemoryBoard;

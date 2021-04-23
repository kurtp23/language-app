import React, { useEffect } from 'react';
import Card from '../../components/CardBoard/Card';

import API from '../../utils/API.js';

function NewBoard() {
  const [fronts, setFronts] = React.useState([]);
  const [deck, setDeck] = React.useState([]);
  const [firstCard, setFirstCard] = React.useState(null)
  const [firstCardIndex, setFirstCardIndex] = React.useState(-1)
  
  useEffect(() => {
    const category = 'zooAnimals'

    API.getChallenges()
      .then((data) => {
        console.log("This is the data ", data.data[0].data[category])

        setFronts(
          data.data[0].data[category].slice(0,9)
        )

      })  

  }, [])

  useEffect(() => {
      const newDeck = [...fronts, ...fronts]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => {
          return {
          content: card.spa,
          faceUp: false,
          index: index,
          };
      });
      setDeck(newDeck)
      setFirstCard(null)
  }, [fronts])

  function flipCardTo(cardIdx, faceUp) {

      setDeck(deck.map((f, i) => {
              if(i === cardIdx) {
                  return {
                    content: f.content,
                    faceUp: faceUp,
                    index: cardIdx,
                  };
              } else {
                  return f;
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
        <Card
          key={i}
          index={card.index}
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

export default NewBoard;

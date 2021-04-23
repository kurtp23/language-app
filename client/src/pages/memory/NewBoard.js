import React, { useEffect } from 'react';
import Card from '../../components/CardBoard/Card';

function NewBoard() {
    const [fronts, setFronts] = React.useState([]);
    const [deck, setDeck] = React.useState([]);
    const [firstCard, setFirstCard] = React.useState(null)

    useEffect(() => {
        setFronts(
            ['🐝','💕','🌻','🧠','🚗','🚲','🚂','🧸','🍦','👾','🚀']
        )
    }, [])

    useEffect(() => {
        const newDeck = [...fronts]
        .sort(() => Math.random() - 0.5)
        .map(card => {
            return {
            content: card,
            faceUp: false,
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
                    faceUp: !f.faceUp,
                    };
                } else {
                    return f;
                }
            })
        )
    }

    function flip(cardIdx) {
        if(firstCard === null) {
          setFirstCard(cardIdx);
        } else {
          const firstCardContent = deck[firstCard].content;
          const secondCardContent = deck[cardIdx].content;
          if(firstCardContent === secondCardContent) {
            setFirstCard(null);
          } else {
            setTimeout(() => {
              flipCardTo(firstCard, false);
              flipCardTo(cardIdx, false);
              setFirstCard(null);
            }, 2000);
          }
        }
    
        flipCardTo(cardIdx, !deck[cardIdx].faceUp);
      }
    

    return (
        <>
        {deck.map((f, i) => {
            return (<div className="Board">
              <Card
                flip={flip}
                content={f.content}
                faceUp={f.faceUp} />
            </div>);
          })}
        </>
    )
}

export default NewBoard;

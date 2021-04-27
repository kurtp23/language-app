import React from 'react';
import './MemoryCard.css';

// semantic ui
import { Image, Icon } from 'semantic-ui-react';

function MemoryCard({ flip, content, faceUp, index, imgKey }) {

  const imgString = '/images/Challenge/Choices/' + imgKey.replace(/\s/g, '') + '.PNG';

  function handleFlip() {

    flip(index)
  }

  return (
    <>
      <div onClick={!faceUp ? handleFlip : null} className={`Card ${faceUp ? 'face-up': 'face-down'}`}>
        {faceUp ? <><Image src={imgString} style={{ width: '100%', top: '0px' }} size='medium' circular/><p className='answerRevealed' style={{transform: 'scaleX(-1)'}}>{content}</p></> : <><Icon inverted={true} name='globe' /></>}
      </div>
    </>
  )
}


export default MemoryCard;

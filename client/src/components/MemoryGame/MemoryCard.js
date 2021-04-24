import React from 'react';
import './MemoryCard.css';

function MemoryCard({ flip, content, faceUp, index, imgKey }) {

  const imgString = '/images/Challenge/Choices/' + imgKey.replace(/\s/g, '') + '.PNG';

  function handleFlip() {

    flip(index)
  }

  return (
    <>
      <div onClick={!faceUp ? handleFlip : null} className={`Card ${faceUp ? 'face-up': ''}`}>
        {faceUp ? <><img src={imgString} /><p style={{transform: 'scaleX(-1)'}}>{content}</p></> : ''}
      </div>
    </>
  )
}


export default MemoryCard;

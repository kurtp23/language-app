import React from 'react';
import './Card.css';

function Card({ flip, content, faceUp, index }) {

  function handleFlip() {

    flip(index)
  }

  return (
    <>
      <div onClick={!faceUp ? handleFlip : ''} className={`Card ${faceUp ? 'face-up': ''}`}>
        {faceUp ? content : ''}
      </div>
    </>
  )
}


export default Card;

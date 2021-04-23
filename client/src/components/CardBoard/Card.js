import React from 'react';
import './Card.css';

// class Card extends React.Component {
//   render() {
//     let content;
//     if(this.props.faceUp) {
//       content = this.props.content;
//     } else {
//       content = '';
//     }
//     return (
//       <div onClick={this.props.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`}>
//         {content}
//       </div>
//     );
//   }
// }

function Card({ flip, content, faceUp }) {
  
  function handleFlip(e) {
    flip(content)
  }

  return (
    <>
      <div onClick={handleFlip} className={`Card ${faceUp ? 'face-up': ''}`}>
        {faceUp ? content : ''}
      </div>
    </>
  )
}


export default Card;

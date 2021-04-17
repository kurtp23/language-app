import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import { useSpring, animated as a } from 'react-spring'
import './FlashCardTemplate.css';

const FlashCardTemplate = (props) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 40 }
    })
    return (
        <div className='templateContainer'>
            <div onClick={() => set(state => !state)}>
            <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <Card className="ui raised card">
                    <Card.Content>
                    <Card.Header className="ui ribbon label" style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
                    <Card.Meta>
                        <span className='cardNum'>Card #{props.cardNumber} - English</span>
                    </Card.Meta>
                    <Card.Description>
                        <h1>{props.englishWord}</h1>
                    </Card.Description>
                    </Card.Content>
                </Card>
            </a.div>
            <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <Card>
                    <Card.Content>
                    <Card.Header className="ui ribbon label" style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
                    <Card.Meta>
                        <span className='cardNum'>Card #{props.cardNumber} - Spanish</span>
                    </Card.Meta>
                    <Card.Description>
                        <h1>{props.word}</h1>
                    </Card.Description>
                    </Card.Content>
                </Card>
            </a.div>
            </div>
        </div>

        // <div className="ui raised very padded text container segment">
        // <Card>
        //     <Card.Content>
        //     <Card.Header>Flash Card</Card.Header>
        //     <Card.Meta>
        //         <span className='cardNum'>Card #{props.cardNumber}</span>
        //     </Card.Meta>
        //     <Card.Description>
        //         <h1>{props.word}</h1>
        //         <h1>{props.englishWord}</h1>
        //     </Card.Description>
        //     </Card.Content>
        // </Card>
        // </div>
    )
}

export default FlashCardTemplate;

// function Card() {
//     const [flipped, set] = useState(false)
//     const { transform, opacity } = useSpring({
//       opacity: flipped ? 1 : 0,
//       transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//       config: { mass: 5, tension: 500, friction: 80 }
//     })
//     return (
//       <div onClick={() => set(state => !state)}>
//         <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
//         <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
//       </div>
//     )
//   }
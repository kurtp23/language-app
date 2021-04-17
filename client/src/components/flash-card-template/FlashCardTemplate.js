import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { useSpring, animated as a } from 'react-spring'
import './FlashCardTemplate.css';
import Translate from '../../utils/spanish';

const FlashCardTemplate = (props) => {

    // Animation states

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 40 }
    })

    // Audio State

    const [audioObj, setAudioObj] = useState({subDirectory: 'd', fileName: 'default'})

    useEffect(() => {
        console.log(props.word);
        try{
            Translate.search(props.word).then((data) => {
                // if (data.data[0].hwi.prs) {
                     console.log('data is: ', data.data)
                //     console.log('data is:', data.data[0].hwi.prs[0]);
                //     setAudioObj({
                //         subDirectory: data.data[0].hwi.prs[0].sound.audio.charAt(0),
                //         fileName: data.data[0].hwi.prs[0].sound.audio, 
                //     })
                // }
                // else {
                //     console.log('no sound has been found')
                // }
            })
        }
        catch(err) {console.log(err)}
    }, [props.word])


    // const playSound = (e) => {
    //     console.log('playing sound')
    //     let URL = `https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioObj.subDirectory}/${audioObj.fileName}.mp3`
    //     var a = new Audio(URL);
    //     a.play();
    // }


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
                        {/* <button onClick={(e) => {
                            e.stopPropagation();
                            playSound()
                        }}>Click Me</button> */}
                        <button onClick={(e) => {
                            e.stopPropagation(); 
                            console.log('player') 
                            }}>click me
                       </button>
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
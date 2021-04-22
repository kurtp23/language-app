import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { useSpring, animated as a } from 'react-spring';
import './FlashCardTemplate.css';
import Translate from '../../utils/spanish';
// import audioSearch from '../../utils/audioSearch';

const FlashCardTemplate = (props) => {

  // Animation states

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 80 }
  });

  // Audio States

  const [audioURL, setAudioURL] = useState('');

  useEffect(() => {
    // console.log('word is: ', props.word);
    // const url =  audioSearch(props.word)
        
    try
    {
      Translate.search(props.word).then((data) => {
        if (typeof(data.data[0]) === 'string') {
          setAudioURL('');
          return;
        } 

        if (!data.data[0].hwi.prs) {
          setAudioURL('');
          return;
        }
            
        if (!data.data[0].hwi.prs[0].sound) {
          setAudioURL('');
          return;
        }

        if (data.data[0].hwi.prs[0].sound.audio) {
          setAudioURL(`https://media.merriam-webster.com/audio/prons/es/me/mp3/${data.data[0].hwi.prs[0].sound.audio.charAt(0)}/${data.data[0].hwi.prs[0].sound.audio}.mp3`);
          return;
        }
      });
    }
    catch(err) {console.log(err);}
    // console.log('url is', url);
  }, [props.word]);
    

  const playAudio = (e) => {
    e.stopPropagation();  
    let audio = new Audio(audioURL);
    audio.play();
  };

  return (
    <div className='templateContainer'>
      <div onClick={() => set(state => !state)}>
        <a.div class='c back' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          <Card className='ui raised card'>
            <Card.Content>
              <Card.Header className='ui ribbon label' style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
              <Card.Meta>
                <span className='cardNum'>Card #{props.cardNumber} - English</span>
              </Card.Meta>
              <Card.Description>
                <h1>{props.englishWord}</h1>
              </Card.Description>
            </Card.Content>
          </Card>
        </a.div>
        <a.div class='c front' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
          <Card>
            <Card.Content>
              <Card.Header className='ui ribbon label' style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
              <Card.Meta>
                <span className='cardNum'>Card #{props.cardNumber} - Spanish</span>
              </Card.Meta>
              <Card.Description>
                <h1>{props.word}</h1>
                <Button size='mini' circular icon='volume up' onClick={playAudio} color={audioURL ? 'teal' : 'grey'} />
              </Card.Description>
            </Card.Content>
          </Card>
        </a.div>
      </div>
    </div>
  );
};

export default FlashCardTemplate;
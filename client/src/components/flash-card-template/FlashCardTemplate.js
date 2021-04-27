import React, { useState, useEffect } from 'react';
import { Card, Button, Image, Grid, GridColumn } from 'semantic-ui-react';
import { useSpring, animated as a } from 'react-spring';
import './FlashCardTemplate.css';
import AudioSearch from '../../utils/audioSearch';

const FlashCardTemplate = (props) => {

  // Animation states

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 80 }
  });

  // Image State

  const [img, setImg] = useState('');

  // Audio State

  const [audioURL, setAudioURL] = useState('');

  useEffect(() => {
    (async() => {
      try {
        const url = await AudioSearch(props.word);
        setAudioURL(url);
      }
      catch (err) {console.log(err);}
    })();
  }, [props.word]);

  useEffect(() => {
    const imgString = '/images/Challenge/Choices/' + props.eng.replace(/\s/g, '') + '.PNG';
    setImg(imgString);
  }, [props.word]);
  
  const playAudio = (e) => {
    e.stopPropagation();  
    let audio = new Audio(audioURL);
    audio.play();
  };

  return (
    <div className='templateContainer'>
      <div onClick={() => set(state => !state)}>
        <a.div className='c back' style={{ opacity: opacity.to(o => 1 - o), transform }}>
          <Card className='ui raised card'>
            <Card.Content>
              <Card.Header className='ui ribbon label' style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
              <Card.Meta>
                <span className='cardNum'>Card #{props.cardNumber} - English</span>
              </Card.Meta>
              <Card.Description>
                <h2>{props.eng}</h2>
              </Card.Description>
              <Image style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={img} size='small' circular/>
            </Card.Content>
          </Card>
        </a.div>
        <a.div className='c front' style={{ opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }}>
          <Card>
            <Card.Content>
              <Card.Header className='ui ribbon label' style={{ backgroundColor: '#fa8072', color: 'white' }}>{props.category}</Card.Header>
              <Card.Meta>
                <span className='cardNum'>Card #{props.cardNumber} - Spanish</span>
              </Card.Meta>
              <Card.Description>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <h2>{props.word}</h2>
                    </Grid.Column>
                    <Grid.Column>
                      <Button size='mini' circular icon='volume up' onClick={playAudio} color={audioURL ? 'teal' : 'grey'} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
              <Image style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={img} size='small' circular/>
            </Card.Content>
          </Card>
        </a.div>
      </div>
    </div>
  );
};

export default FlashCardTemplate;
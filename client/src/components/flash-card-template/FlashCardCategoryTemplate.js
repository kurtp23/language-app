import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { Card, Button, Image, Label } from 'semantic-ui-react';
import './FlashCardCategoryTemplate.css';

// Card animation constants

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
 
const FlashCardCategoryTemplate = ({ category, onChange, description }) => {

  // Button animation states

  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });

  // Card Animation states

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 150, friction: 100 } }));

  function handleClick(e){
    // set selection to button value
    onChange(e.target.value);
  }

  const imgUrl = '/images/Challenge/Category/' + category.replace(/\s/g, '') + '.PNG';

  return (
 
    <a.div
      className='card' fluid
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans), backgroundColor: '#40e0d0' }}>
      <Card fluid className='categoryCard ui raised text container segment'>
        <Card.Header>
        </Card.Header>
        <Card.Content className='categoryContent'>
          <Label className='cat label categoryLabel' ribbon>
            {category}
          </Label>    
          <Image
            floated='right'
            size='medium'
            style={{ marginTop: '5px' }}
            src={imgUrl}
          />
          <Card.Description className='cat categoryDescription'>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content className='categoryContent' extra>
          <div className='ui two buttons'>
            <a.div style={{ opacity: x.to({ range: [0, 1], output: [1.0, 0.5] }), transform: x.to({ range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1], output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]}).to(x => `scale(${x})`) }} className='catSelDiv'>
              <Button className='catSelBtn' value={category} onClick={handleClick} onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)}>
                  Select
              </Button>
            </a.div>
          </div>
        </Card.Content>
      </Card>
    </a.div>
  );
};

export default FlashCardCategoryTemplate;
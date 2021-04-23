import React, { useState } from 'react';

// semantic ui
import { Card, Header, Image, Icon } from 'semantic-ui-react';

// react-spring
import { useSpring, animated } from 'react-spring';

function Choice ({ name, value, correct, onPicked }) {
  const imgString = '/images/Challenge/Choices/' + name.replace(/\s/g, '') + '.PNG';

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(300px) rotateY(${flipped ? 360 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 40 }
  });

  function onSelection() {
    const answerPicked = value;
    
    setFlipped(state => !state);

    setTimeout(function(){      
      onPicked(answerPicked);
    }, 2000);

  }

  const revealedAnswer = <Header style={{ fontSize: '24px', color: correct ? 'green' : 'red'}}>{value}</Header>;

  return (
    <Card style={{position: 'relative'}}color='teal' onClick={onSelection}>
      
      <animated.div
          style={{ textAlign: 'center', opacity: opacity.interpolate(o => o), transform }}
        >
        <Image src={imgString} size='medium' circular />
      </animated.div>

      <animated.div
          style={{ position: 'absolute',
            top: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          {revealedAnswer}

      </animated.div>
        
    </Card>
  );
}

export default Choice;

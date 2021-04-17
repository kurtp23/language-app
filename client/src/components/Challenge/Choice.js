import React, { useState } from 'react'

// semantic ui
import { Card, Button, Image, Icon } from 'semantic-ui-react'

// react-spring
import { useSpring, animated } from 'react-spring'

function Choice ({ name, value, correct, onChange }) {
    const imgString = "/images/Challenge/Choices/" + name.replace(/\s/g, "") + ".PNG"

    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 0 : 1,
      transform: `perspective(300px) rotateY(${flipped ? 360 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 40 }
    })
  
    function onSelection(e) {
        const answerPicked = e.target.value

        setFlipped(state => !state)

        setTimeout(function(){      
          onChange(answerPicked)
       }, 2000);

    }

    const revealedAnswer = <Card.Header style={{ fontSize: '15px', color: correct ? 'green' : 'red'}}>{value}</Card.Header>

    return (
          <Card color='teal'>
            <Image size='medium' circular />
            <Image src={imgString} size='medium' circular />

            <Card.Content>
              <Button color='green' fluid={true} value={value} onClick={onSelection}><Icon name="like" />Choose</Button>
            </Card.Content>
            <Card.Content style={{ padding: '5px'}}>
              <animated.div
                style={{ textAlign: 'center', opacity: opacity.interpolate(o => 1 - o), transform }}
                >
                {revealedAnswer}
              </animated.div>
            </Card.Content>
          </Card>
    )
}

export default Choice

import React, { useEffect, useState } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { useSpring, animated } from 'react-spring'

function Choice ({ name, value, correct, onChange }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = "/images/Challenge/Choices/" + name.replace(/\s/g, "") + ".PNG"

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 0 : 1,
      transform: `perspective(300px) rotateX(${flipped ? 360 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 40 }
    })
    
    useEffect(() => {
        setPicked(false)
    }, [])


    function onSelection(e) {
      

        const picked = e.target.value
        set(state => !state)

        setTimeout(function(){
            
          onChange(picked)
       }, 1000);


    }

    const revealedAnswer = <Card.Header style={correct ? { color: 'green'} : { color: 'red'}}>{value}</Card.Header>

    return(
        <Card>
        <Image src={imgString} wrapped ui={false} />
        <Card.Content>
          <Button value={value} onClick={onSelection}>Choose</Button>
        </Card.Content>
        <Card.Content>
        <animated.div
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          >
            {revealedAnswer}
          </animated.div>
        </Card.Content>
      </Card>



    )
}

export default Choice

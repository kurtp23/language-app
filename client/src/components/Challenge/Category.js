import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { Card, Button, Image } from 'semantic-ui-react'

function Category({ category, onChange, description }) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 0 : 0,
      transform: `perspective(300px) rotateX(${flipped ? 360 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 40 }
    })

    function handleClick(e){
        const pickedCategory = e.target.value
        set(state => !state)

        setTimeout(function(){
            onChange(pickedCategory)
       }, 1000);
    }
    
    const imgUrl = "/images/Challenge/Category/" + category.replace(/\s/g, "") + ".PNG"

    return (
        <>
             <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='medium'
                    src={imgUrl}
                    />
                    <Card.Header style={{fontSize: '11px'}}>{category}</Card.Header>
                    <Card.Description style={{fontSize: '10px'}}>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <animated.div
                        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
                        >
                    <div className='ui two buttons'>
                    <Button value={category} basic color='green' onClick={handleClick}>
                        Select
                    </Button>
                    </div>

                    </animated.div>

                </Card.Content>

            </Card>


        </>
    )
}

export default Category
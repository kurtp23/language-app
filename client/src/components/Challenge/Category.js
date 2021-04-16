import React from 'react'
import { useSpring, animated } from 'react-spring'

import { Card, Button, Image } from 'semantic-ui-react'
 
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Category({ category, onChange, description }) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    function handleClick(e){
        onChange(e.target.value)
    }
    
    const imgUrl = "/images/Challenge/Category/" + category.replace(/\s/g, "") + ".PNG"

    return (
        <>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
 <div className="ui raised very padded text container segment">
        <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='medium'
                    src={imgUrl}
                    />
                    <Card.Header>{category}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button value={category} basic color='green' onClick={handleClick}>
                        Select
                    </Button>
                    </div>
                </Card.Content>
            </Card>
            </div>

    </animated.div>
       
        </>
    )
}

export default Category
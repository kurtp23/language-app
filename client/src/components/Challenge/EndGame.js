import React from 'react';
import { Link } from 'react-router-dom'

// semantic ui
import { Divider, Header, Button, Icon, Image, Container } from 'semantic-ui-react'

function EndGame({ onContinue, onExit, count, category }) {
    const imgUrl = "/images/Challenge/Category/" + category.replace(/\s/g, "") + ".PNG"

    return (
            <>
                <Container>
                    
                    <Image  floated='right' src={imgUrl} size='small' circular />
                    
                    <Divider />
                    <Header as='h2'>Nice Job!</Header>

                    You have played <Icon name='arrow alternate circle right'/> {count} times!
                    
                    
                    
                    <Divider />
                    
                    <Button onClick={onContinue} basic color='green'>
                        <Icon name='like' />
                        Play Again
                    </Button>
                    <Link to="/">
                        <Button  onClick={onExit} basic color='red'>
                            Exit
                        </Button>
                    </Link>
                    </Container>
            </>

    )
}

export default EndGame

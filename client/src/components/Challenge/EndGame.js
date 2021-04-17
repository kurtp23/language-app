import React from 'react';


import { Link } from 'react-router-dom'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

function EndGame({ onContinue, onExit, count, category }) {
    const imgUrl = "/images/Challenge/Category/" + category.replace(/\s/g, "") + ".PNG"

    return (
            <>
            <Card>
                <Card.Content>
                <Card.Header as='h2'>You Chose Correctly!</Card.Header>
                    <Image  floated='right' src={imgUrl} size='small' circular />
                    <Icon name='arrow alternate circle right'/>
                    <Card.Meta>You have played {count} times!</Card.Meta>
                    
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button onClick={onContinue} basic color='green'>
                        Play Again
                    </Button>
                    <Link to="/">
                        <Button  onClick={onExit} basic color='red'>
                            Exit
                        </Button>
                    </Link>
                    </div>
                </Card.Content>
            </Card>
            </>

    )
}

export default EndGame

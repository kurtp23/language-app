import React from 'react';


import { Link } from 'react-router-dom'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

function EndGame({ onContinue, onExit, count }) {

    return (
        <Card>
        <Card.Content>
            <Card.Header>You Chose Correctly!</Card.Header>
            <Card.Meta><Icon name='arrow alternate circle right'/>You have played {count} times!</Card.Meta>
            
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

    )
}

export default EndGame
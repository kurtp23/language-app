import React from 'react';
import { Card } from 'semantic-ui-react';

const FlashCardTemplate = (props) => {
    return (
        <div className="ui raised very padded text container segment">
        <Card>
            <Card.Content>
            <Card.Header>Flash Card</Card.Header>
            <Card.Meta>
                <span className='cardNum'>Card #1</span>
            </Card.Meta>
            <Card.Description>
                <h1>Verde</h1>
            </Card.Description>
            </Card.Content>
        </Card>
        </div>
    )
}

export default FlashCardTemplate;
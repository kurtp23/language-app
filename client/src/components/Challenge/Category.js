import React from 'react'

import { Card, Button, Image } from 'semantic-ui-react'

function Category({ category, onChange }) {

    function handleClick(e){
        onChange(e.target.value)
    }
    
    return (
        <>
            <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{category}</Card.Header>
                    <Card.Description>
                    Replace this with a description!
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
        </>
    )
}

export default Category